"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Shape7 from "./components/shapes/shape_7"
import { getHomeFeed, formatDate, type BlogPost } from "@/lib/blogist-api"

function normalizeBlogPost(post: any): BlogPost {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || post.brief || "",
    featured_image: post.featured_image || post.postBannerImage || post.thumbnail_500_image || "/images/school-building.png",
    published_at: post.published_at || post.published_datetime || post.published_on || "",
    slug: post.slug || post.postSlug || post.uid || "",
    content: post.content || "",
    author: post.author || { name: post.fullName || "", avatar: post.authorPic || "" },
    categories: post.categories || [],
    // fallback fields for compatibility
    postBannerImage: post.postBannerImage || post.featured_image || post.thumbnail_500_image || "/images/school-building.png",
    postSlug: post.postSlug || post.slug || post.uid || "",
    published_datetime: post.published_datetime || post.published_at || post.published_on || "",
    brief: post.brief || post.excerpt || "",
  }
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [rotate, setRotate] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const shapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true)
        const posts = await getHomeFeed(1, 6) // Fetch 6 posts
        setBlogs((posts || []).map(normalizeBlogPost))
        setError(null)
      } catch (err) {
        console.error("Error fetching blogs:", err)
        setError("Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  useEffect(() => {
    let lastRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        if (!rotate && ratio > 0.6) setRotate(true);
        else if (rotate && ratio < 0.1) setRotate(false);
        lastRatio = ratio;
      },
      { threshold: [0, 0.1, 0.2, 0.4, 0.6, 1] }
    );
    if (shapeRef.current) observer.observe(shapeRef.current);
    return () => observer.disconnect();
  }, [rotate]);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 md:px-6 py-16 max-w-7xl relative">
      <div ref={shapeRef} className={`absolute -top-[166px] md:top-2 right-12 md:right-0 transition-transform duration-700 scale-75 md:scale-100 -mt-0 md:-mt-0 -mr-6 md:mr-0 z-50 ${rotate ? 'rotate-[180deg]' : 'rotate-0'}`}>
        <Shape7 />
      </div>
      {/* Section header */}
      <div className="relative flex items-start mb-6 md:mb-12">
        <div className="flex-1 min-w-0">
          <div className="mb-8">
            <span className="bg-[#0F4F8C] px-3 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider text-white">NEWS/BLOG</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-0 md:mb-4">SCV Stories</h2>
        </div>
        {/* ...existing code for shape if any... */}
        <div className="absolute left-0 right-0 top-[44px] h-px bg-neutral-200 z-0" />
      </div>
      {/* Blog posts grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-5">
        {loading && <div className="col-span-3 text-center text-gray-500">Loading...</div>}
        {error && <div className="col-span-3 text-center text-red-500">{error}</div>}
        {!loading && !error && blogs.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">No blog posts found.</div>
        )}
        {!loading && !error && blogs.map((post) => (
          <div className="flex flex-col" key={post.id}>
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.postBannerImage || post.featured_image || "/images/school-building.png"}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-md md:text-xl font-medium text-gray-800 mb-4 line-clamp-2">{post.title}</h3>
            {/* <div className="text-sm text-gray-500 mb-2">{formatDate(post.published_datetime || post.published_at)}</div> */}
            <div className="mt-auto">
              <Link
                href={`/blog/${post.postSlug}`}
                className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-14">
          <a
            href="/blog"
            className="inline-block bg-blue-400 hover transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300:bg-blue-500 text-white py-3 px-8 rounded-full text-sm transition hover:outline-none hover:ring-2 hover:ring-blue-400 hover:ring-offset-2 transform hover:scale-110 duration-300"
          >
            Read More Stories
          </a>
        </div>
    </section>
  )
}
