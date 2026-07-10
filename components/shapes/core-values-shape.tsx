export default function CoreValuesShape({ className, uid = "default" }: { className?: string; uid?: string }) {
  const maskId = `mask0_808_2574_${uid}`
  const gradientId = `paint0_linear_808_2574_${uid}`
  const clipId = `clip0_808_2574_${uid}`
  return (
    <svg viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="250"
          height="250"
        >
          <path d="M250 0H0V250H250V0Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0058 125.527C10.3972 128.031 0.892824 139.156 0.892824 152.5L0.89282 222.5C0.89282 237.688 13.205 250 28.3929 250H98.3929C112.05 250 123.382 240.044 125.527 226.994C128.031 239.603 139.156 249.107 152.5 249.107H222.5C237.688 249.107 250 236.795 250 221.607V151.607C250 137.95 240.044 126.618 226.995 124.473C239.602 121.968 249.107 110.844 249.107 97.5V27.5C249.107 12.3122 236.795 3.72368e-06 221.607 3.0598e-06L151.607 0C137.95 -5.96981e-07 126.618 9.95576 124.473 23.0058C121.968 10.3972 110.844 0.89285 97.5 0.89285H27.5C12.3122 0.89285 0 13.205 0 28.3929V98.3929C0 112.05 9.95578 123.382 23.0058 125.527Z"
            fill={`url(#${gradientId})`}
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="196.875"
          y1="40"
          x2="55"
          y2="184.375"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0509862" stopColor="#44ABF9" />
          <stop offset="1" stopColor="#D1EBFF" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="250" height="250" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
