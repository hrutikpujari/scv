export default function AcademicShape({ className, uid = "default" }: { className?: string; uid?: string }) {
  const maskId = `mask0_783_1052_${uid}`
  const gradientId = `paint0_linear_783_1052_${uid}`
  const clipId = `clip0_783_1052_${uid}`
  return (
    <svg
      width="216"
      height="216"
      viewBox="0 0 216 216"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="216"
          height="216"
        >
          <path d="M216 0H0V216H216V0Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M216 54V4.72083e-06L108 0V53.9787C107.988 24.1651 83.8163 4.72083e-06 54 4.72083e-06H2.36042e-06V108H54C24.1767 108 -1.30362e-06 132.177 0 162L2.36042e-06 216H108V162C108 191.823 132.177 216 162 216H216V108H162.022C191.835 107.988 216 83.8163 216 54Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="29.7"
          y1="20.52"
          x2="160.92"
          y2="188.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC710" />
          <stop offset="1" stopColor="#FFF7DE" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="216" height="216" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
