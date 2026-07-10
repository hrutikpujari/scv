

"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/navbar";
import Footer from "@/footer";
import PhotoGallerySection from "@/photo-gallery-section";
import { formatDate, getHomeFeed } from "@/lib/blogist-api";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHomeFeed(1, 20)
      .then((data) => setPosts(data || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 min-h-[60vh]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-12 text-center text-[#0F4F8C] font-bold">SCV School Blog</h1>
        {loading ? (
          <div className="text-center py-16 text-gray-500">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post: any) => (
              <div key={post.id} className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <Link href={`/blog/${post.postSlug}`} className="block focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image
                      src={post.postBannerImage || "/placeholder.svg?height=300&width=500"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 px-4 pb-6">
                    <p className="text-sm text-gray-500">{formatDate(post.published_datetime)}</p>
                    <h3 className="font-bold text-base md:text-xl text-[#0F4F8C] group-hover:text-blue-500 transition line-clamp-2">{post.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base line-clamp-3">{post.brief}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <PhotoGallerySection />
      <Footer />
    </>
  );
}
