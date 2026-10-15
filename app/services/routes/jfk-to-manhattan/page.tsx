import { permanentRedirect } from 'next/navigation';

// Permanently redirect to the canonical, full-content page for better SEO link consolidation.
export default function JFKToManhattanPage() {
  permanentRedirect('/services/routes/jfk-to-manhattan-black-car-service');
}
