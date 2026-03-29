export function Logo({ className = "w-12 h-12" }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon - protein molecule symbol */}
      <polygon
        points="50,10 80,25 80,55 50,70 20,55 20,25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf inside - natural ingredient symbol */}
      <path
        d="M50 35 Q45 40 50 50 Q55 40 50 35"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Inner hexagon accent */}
      <circle
        cx="50"
        cy="42"
        r="3"
        fill="currentColor"
      />
    </svg>
  )
}
