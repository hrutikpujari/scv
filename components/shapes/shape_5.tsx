// Blue Blob SVG (used in UniqueValueProposition)
export default function Shape5({ uid = "default" }: { uid?: string }) {
  const maskId = `mask0_648_527_${uid}`
  const gradientId = `paint0_linear_648_527_${uid}`
  return (
    <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id={maskId}
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="124"
        height="124"
      >
        <path d="M0 0H124V124H0V0Z" fill="white" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62 13.64C62 6.10684 68.1068 0 75.64 0H110.36C117.893 0 124 6.10683 124 13.64V48.806C124 56.3392 117.893 62.4458 110.36 62.4458H75.64C68.1068 62.4458 62 68.5528 62 76.0858V110.36C62 117.893 55.893 124 48.36 124H13.64C6.107 124 0 117.893 0 110.36V75.1936C0 67.6606 6.107 61.5539 13.64 61.5539H48.36C55.893 61.5539 62 55.4471 62 47.9139V13.64Z"
          fill={`url(#${gradientId})`}
        />
      </g>
      <defs>
        <linearGradient
          id={gradientId}
          x1="115.32"
          y1="16.12"
          x2="13.02"
          y2="111.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D1EBFF" />
          <stop offset="1" stopColor="#44ABF9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
