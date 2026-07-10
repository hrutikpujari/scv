// Blue Pattern SVG (used in QuickConnections)
export default function Shape11({ className, uid = "default" }: { className?: string; uid?: string }) {
  const maskId = `mask0_775_864_${uid}`
  const gradientId = `paint0_linear_775_864_${uid}`
  const clipId = `clip0_775_864_${uid}`
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="200"
          height="200"
        >
          <path d="M200 0H0V200H200V0Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient id={gradientId} x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#44ABF9" />
          <stop offset="1" stopColor="#D1EBFF" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
