import crypto from "crypto"

// API request function
async function fetchDataFromAPI(endpoint: string, payload: any = {}): Promise<any> {
  // Updated to use HTTPS - this prevents mixed content blocking in production
  const PROXY_URL = "https://api.sudhirwawdhane.com"

  try {
    const response = await fetch(`${PROXY_URL}?endpoint=${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("API Request Error:", error)
    return null
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  if (!dateString) return ""

  try {
    const date = new Date(dateString)

    // Format like: Tuesday, November 26th, 2025 - Mumbai
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    // Get the day number
    const day = date.getDate()

    // Add the ordinal suffix (st, nd, rd, th)
    let suffix = "th"
    if (day % 10 === 1 && day !== 11) {
      suffix = "st"
    } else if (day % 10 === 2 && day !== 12) {
      suffix = "nd"
    } else if (day % 10 === 3 && day !== 13) {
      suffix = "rd"
    }

    // Format the date
    const formattedDate = date.toLocaleDateString("en-US", options)

    // Replace the day number with day + suffix
    const dayWithSuffix = formattedDate.replace(/\b\d+\b/, day + suffix)

    // Add Mumbai
    return `${dayWithSuffix}`
  } catch (error) {
    console.error("Error formatting date:", error)
    return dateString
  }
}

// Define BlogPost type
export type BlogPost = {
  id: string
  title: string
  excerpt: string
  featured_image: string
  published_at: string
  slug: string
  content: string
  author: { name: string; avatar: string }
  categories: { id: string; name: string; slug: string }[]
  postBannerImage?: string
  postSlug?: string
  published_datetime?: string
  brief?: string
  uid?: string
  views?: string
  likes?: string
  dislikes?: string
  post_type?: string
  rating?: string
  fullName?: string
  authorPic?: string
  aboutAuthor?: string | null
  thumbnail_250_image?: string
  thumbnail_500_image?: string
  published_on?: string
  postTagsJson?: string
}

// Get home feed posts
export async function getHomeFeed(page = 1, limit = 10): Promise<BlogPost[]> {
  try {
    console.log("Fetching home feed...")
    const response = await fetchDataFromAPI("home_feed.php", {
      page_number: page,
      limit: limit,
      exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour expiration
    })

    return (response?.recent_post || []) as BlogPost[]
  } catch (error) {
    console.error("Error fetching home feed:", error)
    return []
  }
}

// Get a specific post by slug
export async function getPost(slug: string): Promise<any | null> {
  try {
    console.log("Getting post with slug:", slug)
    
    // Clean the slug if it contains article.php
    let cleanedSlug = slug.trim()
    if (cleanedSlug.includes("article.php")) {
      const parts = cleanedSlug.split("/")
      cleanedSlug = parts[parts.length - 1]
    }
    
    console.log("Cleaned slug for API call:", cleanedSlug)

    const response = await fetchDataFromAPI("post_details.php", {
      post_slug: cleanedSlug,
      exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour expiration
    })
    
    console.log("API response for post:", response)

    // Check the structure of the response based on the reference blog
    if (response && response.status && response.status.status === "1" && response.data && response.data.length > 0) {
      return {
        post_details: {
          data: response.data
        }
      }
    } else if (response && response.status === "success" && response.data && response.data.length > 0) {
      return {
        post_details: {
          data: response.data
        }
      }
    } else {
      console.error("No post found for slug:", cleanedSlug, "Full response:", response)
      return null
    }
  } catch (error) {
    console.error("Error fetching post:", error)
    return null
  }
}