import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSiteUrl } from '@/lib/site';
import { blogPosts } from '@/lib/blog-data';
import { CONTACT_PHONE_E164, CONTACT_PHONE_DISPLAY, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { BlogPostingJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${getSiteUrl()}/blog/${post.slug}` },
    openGraph: {
      ...ogDefaults,
      url: `${getSiteUrl()}/blog/${post.slug}`,
      title: post.seoTitle,
      description: post.metaDescription,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = getSiteUrl();

  return (
    <>
      <BlogPostingJsonLd
        headline={post.title}
        description={post.metaDescription}
        datePublished={post.date}
        author={post.author}
        image={post.image}
        url={`${siteUrl}/blog/${post.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Blog', url: `${siteUrl}/blog` },
          { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
        ]}
      />

      <article className="bg-brand-offwhite">
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[320px] bg-brand-black">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/50" />
          <div className="absolute inset-0 flex items-end pb-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <nav className="mb-4">
                <Link
                  href="/blog"
                  className="text-brand-silver hover:text-brand-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
              </nav>
              <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white leading-tight">
                {post.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-brand-silver text-sm">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              {post.content.map((block, i) => {
                switch (block.type) {
                  case 'h2':
                    return (
                      <h2 key={i} className="font-serif text-2xl font-semibold text-brand-black mt-10 mb-4">
                        {block.text}
                      </h2>
                    );
                  case 'h3':
                    return (
                      <h3 key={i} className="font-serif text-xl font-semibold text-brand-black mt-8 mb-3">
                        {block.text}
                      </h3>
                    );
                  case 'p':
                    return (
                      <p key={i} className="text-brand-grey leading-relaxed mb-5">
                        {block.text}
                      </p>
                    );
                  case 'ul':
                    return (
                      <ul key={i} className="space-y-2 mb-6">
                        {block.items?.map((item, j) => (
                          <li key={j} className="text-brand-grey leading-relaxed flex items-start gap-2">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-black shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  case 'cta':
                    return (
                      <div key={i} className="mt-10 mb-6 p-8 bg-brand-black text-center">
                        <p className="font-serif text-xl font-semibold text-brand-white mb-4">
                          {block.text}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Link
                            href="/book"
                            className="inline-flex items-center justify-center px-6 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-light transition-colors text-sm"
                          >
                            Get a Quote
                          </Link>
                          <a
                            href={`tel:${CONTACT_PHONE_E164}`}
                            className="inline-flex items-center justify-center px-6 py-3 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-sm"
                          >
                            Call {CONTACT_PHONE_DISPLAY}
                          </a>
                        </div>
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {(() => {
          const related = blogPosts
            .filter((p) => p.slug !== post.slug)
            .map((p) => ({
              post: p,
              score: p.keywords.filter((k) => post.keywords.includes(k)).length,
            }))
            .sort((a, b) => b.score - a.score || blogPosts.indexOf(a.post) - blogPosts.indexOf(b.post))
            .slice(0, 3)
            .map((r) => r.post);
          return (
            <section className="py-12 lg:py-16 bg-brand-white border-t border-brand-light">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-xl font-semibold text-brand-black mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group border border-brand-light hover:border-brand-black transition-colors p-5"
                    >
                      <div className="text-xs text-brand-silver mb-2">{r.readTime}</div>
                      <h3 className="font-serif text-sm font-semibold text-brand-black group-hover:underline leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-xs text-brand-grey line-clamp-2">{r.description}</p>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/blog" className="text-sm font-medium text-brand-black hover:underline">
                    View All Articles &rarr;
                  </Link>
                </div>
              </div>
            </section>
          );
        })()}
      </article>
    </>
  );
}
