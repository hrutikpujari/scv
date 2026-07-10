import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function FaqBreadcrumb() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
      <div className="flex items-center text-sm text-gray-600">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-800">Frequently Asked Questions</span>
      </div>
    </div>
  )
}
