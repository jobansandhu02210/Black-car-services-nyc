import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { DRIVER_PROMOS } from '../lib/referral-driver-list';

const prisma = new PrismaClient({
  adapter: new PrismaPg(
    new Pool({
      connectionString: process.env.DATABASE_URL,
    })
  ),
});

async function main() {
  for (const d of DRIVER_PROMOS) {
    await prisma.driver.upsert({
      where: { code: d.code },
      update: { name: d.name, active: true },
      create: { name: d.name, code: d.code, active: true },
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
