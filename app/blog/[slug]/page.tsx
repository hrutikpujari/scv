"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { formatDate, getPost } from "@/lib/blogist-api";
import Navbar from "@/navbar";
import Footer from "@/footer";
import PhotoGallerySection from "@/photo-gallery-section";
import "../blog-content.css";

function normalizePost(post: any) {
  return {
    title: post.title,
    postBannerImage: post.postBannerImage || post.featured_image || post.thumbnail_500_image || "/placeholder.svg",
    brief: post.brief || post.excerpt || "",
    published_datetime: post.published_datetime || post.published_at || post.published_on || "",
    content: post.content || "",
  };
}

function getPostDetailsClient(slug: string) {
  return getPost(slug).then((postData) => {
    let post = null;
    if (
      postData &&
      postData.post_details &&
      postData.post_details.data &&
      Array.isArray(postData.post_details.data) &&
      postData.post_details.data.length > 0
    ) {
      post = postData.post_details.data[0];
    } else if (
      postData &&
      postData.data &&
      Array.isArray(postData.data) &&
      postData.data.length > 0
    ) {
      post = postData.data[0];
    }
    return post ? normalizePost(post) : null;
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getPostDetailsClient(slug as string)
      .then((data) => {
        setPost(data);
        setError(null);
      })
      .catch((err) => {
        setError("Failed to load blog post.");
        setPost(null);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center text-gray-500 min-h-[60vh]">Loading...</div>
        <PhotoGallerySection />
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center min-h-[60vh]">
          <h1 className="text-xl md:text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog" className="text-blue-500 hover:underline">
            Back to Blog
          </Link>
        </div>
        <PhotoGallerySection />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-[60vh] bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Post Title - Blue and Bold */}
          <h1 className="mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F4F8C] font-bold mb-10 text-center">
            {post.title}
          </h1>
        </div>
        {/* Banner Image - Responsive width */}
        {post.postBannerImage && (
          <div className="w-full max-w-[1200px] relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[21/9] lg:aspect-[21/9] mb-12 mt-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src={post.postBannerImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Brief/Excerpt - Bigger and less bold */}
          <div className="text-base sm:text-lg md:text-2xl text-gray-700 mb-8 font-normal text-center">
            {post.brief}
          </div>
          {/* Published Date - Below Brief */}
          <p className="text-gray-600 mb-8 text-center">
            {formatDate(post.published_datetime)}
          </p>
          {/* Horizontal Separator */}
          <hr className="border-gray-200 mb-10" />
          {/* Post Content */}
          <div
            className="blog-content prose md:prose-lg max-w-none mb-16 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Back to Blog button - Pill shaped, blue, centered */}
          <div className="flex justify-center mb-16">
            <Link
              href="/blog"
              className="bg-[#0F4F8C] text-white px-8 py-3 rounded-full hover:bg-[#0F4F8C]/90 transition shadow-md"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <PhotoGallerySection />
      <Footer />
    </>
  );
}
