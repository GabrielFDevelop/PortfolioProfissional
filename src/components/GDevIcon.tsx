interface Props {
  className?: string;
}

export default function GDevIcon({ className = "w-5 h-5" }: Props) {
  return (
    <svg
      viewBox="0 0 56 28"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-label="GD"
    >
      <text
        x="2"
        y="22"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="900"
        fontStyle="normal"
        letterSpacing="-0.5"
      >
        {"</>"}
      </text>
    </svg>
  );
}
