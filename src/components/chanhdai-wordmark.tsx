export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2048 256"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="inherit"
        fontWeight={700}
        fontSize={144}
        fill="currentColor"
      >
        SHREYAS
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2048 256"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="inherit" font-weight="700" font-size="144" fill="${color}">SHREYAS</text></svg>`;
}
