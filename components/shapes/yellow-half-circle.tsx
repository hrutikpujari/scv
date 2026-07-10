export default function YellowHalfCircle({ className, uid = "default" }: { className?: string; uid?: string }) {
  const gradientId = `paint0_linear_822_2675_${uid}`
  return (
    <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 100L143.75 100C143.75 75.838 124.162 56.25 100 56.25C75.8375 56.25 56.25 75.838 56.25 100H0C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient id={gradientId} x1="100" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC300" />
          <stop offset="1" stopColor="#FFF7DE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
