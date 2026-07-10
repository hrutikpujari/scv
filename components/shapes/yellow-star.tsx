export default function YellowStar({ className = "", uid = "default" }: { className?: string; uid?: string }) {
  const maskId = `mask0_822_2858_${uid}`
  const gradientId = `paint0_linear_822_2858_${uid}`
  const clipId = `clip0_822_2858_${uid}`
  return (
    <svg
      className={className}
      width="230"
      height="230"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="230"
          height="230"
        >
          <path d="M230 0H0V230H230V0Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M138 0H92V59.4731L49.9462 17.4193L17.4193 49.9461L59.4732 92H0V138H59.4731L17.4193 180.053L49.9462 212.581L92 170.527V230H138V170.527L180.054 212.581L212.581 180.054L170.527 138H230V92H170.527L212.581 49.9461L180.054 17.4192L138 59.4731V0Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient id={gradientId} x1="115" y1="0" x2="115" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC300" />
          <stop offset="1" stopColor="#FFF7DE" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="230" height="230" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
