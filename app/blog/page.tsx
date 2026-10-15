import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { blogPosts } from '@/lib/blog-data';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog | Eagle Eye Chauffeur — NYC Travel & Transportation Tips',
  },
  description:
    'Expert guides and tips on NYC chauffeur services, airport transfers, luxury travel & tri-state transportation from Eagle Eye Chauffeur.',
  keywords: [...siteKeywords, 'NYC chauffeur blog', 'airport transfer tips', 'NYC travel guide', 'car service NYC blog'],
  alternates: { canonical: `${getSiteUrl()}/blog` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/blog`,
    title: 'Blog | Eagle Eye Chauffeur — NYC Travel & Transportation Tips',
    description:
      'Expert guides and tips on NYC chauffeur services, airport transfers, luxury travel & tri-state transportation from Eagle Eye Chauffeur.',
  },
};

function getCategory(slug: string, title: string): string {
  const s = (slug + ' ' + title).toLowerCase();
  if (s.includes('world-cup') || s.includes('world cup') || s.includes('metlife')) return 'World Cup 2026';
  if (s.includes('jfk') || s.includes('lga') || s.includes('ewr') || s.includes('hpn') || s.includes('airport')) return 'Airport Transfers';
  if (s.includes('corporate') || s.includes('executive') || s.includes('roadshow')) return 'Corporate Travel';
  if (s.includes('wedding') || s.includes('prom') || s.includes('anniversary') || s.includes('special-event')) return 'Special Events';
  if (s.includes('hampton') || s.includes('montauk') || s.includes('foliage') || s.includes('summer') || s.includes('labor-day') || s.includes('thanksgiving') || s.includes('holiday') || s.includes('new-year')) return 'Travel Guides';
  if (s.includes('westchester') || s.includes('connecticut') || s.includes('long-island') || s.includes('brooklyn') || s.includes('bronx') || s.includes('queens') || s.includes('staten')) return 'NYC Routes';
  return 'NYC Tips';
}

export default function BlogIndexPage() {
  return (
    <div className="bg-brand-offwhite">

      {/* Hero */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4 text-center">
            Eagle Eye Chauffeur
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white text-center">
            NYC Car Service Blog
          </h1>
          <p className="mt-4 text-brand-silver max-w-xl mx-auto text-center">
            Airport guides, travel tips, and insider knowledge for getting around New York City like a professional.
          </p>
        </div>
      </section>

      {/* Featured first post */}
      {blogPosts.length > 0 && (
        <section className="bg-brand-white border-b border-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Left: label + number */}
              <div className="bg-brand-black p-10 lg:p-16 flex flex-col justify-between min-h-[280px]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-brand-silver text-xs font-medium uppercase tracking-widest">
                    {getCategory(blogPosts[0].slug, blogPosts[0].title)}
                  </span>
                  <span className="font-serif text-6xl font-semibold text-white opacity-10 select-none leading-none">
                    01
                  </span>
                </div>
                <div>
                  <span className="inline-block bg-brand-white text-brand-black text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-6">
                    Latest
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-white leading-snug group-hover:text-brand-silver transition-colors">
                    {blogPosts[0].title}
                  </h2>
                </div>
              </div>
              {/* Right: meta + description */}
              <div>
                <div className="flex items-center gap-3 text-xs text-brand-grey mb-4 uppercase tracking-wide">
                  <time dateTime={blogPosts[0].date}>
                    {new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <p className="text-brand-grey leading-relaxed text-base mb-6">
                  {blogPosts[0].description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid — remaining posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => {
              const index = i + 2; // starts at 02
              const category = getCategory(post.slug, post.title);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-brand-white border border-brand-light hover:border-brand-black transition-colors flex flex-col overflow-hidden"
                >
                  {/* Dark accent header */}
                  <div className="bg-brand-black px-5 py-4 flex items-center justify-between">
                    <span className="text-brand-silver text-xs font-medium uppercase tracking-widest">
                      {category}
                    </span>
                    <span className="font-serif text-2xl font-semibold text-white opacity-15 select-none leading-none">
                      {String(index).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-brand-grey mb-3 uppercase tracking-wide">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-base font-semibold text-brand-black mb-2 group-hover:underline leading-snug flex-1">
                      {post.title}
                    </h2>
                    <p className="text-brand-grey text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <span className="text-xs font-semibold text-brand-black uppercase tracking-widest inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                      Read More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-4">
            Ready to Ride with Eagle Eye?
          </h2>
          <p className="text-brand-silver mb-8">
            Experience the difference professional chauffeur service makes. Get a quote in seconds.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

    </div>
  );
}
