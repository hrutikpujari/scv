export default function BluePattern({ className }: { className?: string }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="mask0_822_2963"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="200"
        height="200"
      >
        <path d="M200 0H0V200H200V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_822_2963)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z"
          fill="url(#paint0_linear_822_2963)"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_822_2963" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#44ABF9" />
          <stop offset="1" stopColor="#D1EBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
