export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <rect
        x="8"
        y="8"
        width="496"
        height="240"
        rx="24"
        ry="24"
        fill="currentColor"
        opacity="0.08"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="inherit"
        fontWeight={700}
        fontSize={160}
        fill="currentColor"
      >
        S
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><rect x="8" y="8" width="496" height="240" rx="24" ry="24" fill="${color}" opacity="0.08"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="inherit" font-weight="700" font-size="160" fill="${color}">S</text></svg>`;
}
