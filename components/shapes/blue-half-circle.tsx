export default function BlueHalfCircle({ className, uid = "default" }: { className?: string; uid?: string }) {
  const gradientId = `paint0_linear_822_2866_${uid}`
  return (
    <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74228e-06 -1.74846e-05L56.25 -1.2567e-05C56.25 24.162 75.838 43.75 100 43.75C124.163 43.75 143.75 24.162 143.75 -4.91753e-06L200 0C200 55.2285 155.229 100 100 100C44.772 100 3.91405e-06 55.2285 8.74228e-06 -1.74846e-05Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="100"
          y1="100"
          x2="100"
          y2="-8.74228e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44ABF9" />
          <stop offset="1" stopColor="#D1EBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
