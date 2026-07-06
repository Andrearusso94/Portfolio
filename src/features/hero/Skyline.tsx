interface Building {
  x: number;
  y: number;
  w: number;
  h: number;
}

const BUILDINGS: Building[] = [
  { x: 0, y: 140, w: 60, h: 80 },
  { x: 65, y: 100, w: 40, h: 120 },
  { x: 110, y: 160, w: 70, h: 60 },
  { x: 185, y: 70, w: 45, h: 150 },
  { x: 235, y: 120, w: 55, h: 100 },
  { x: 295, y: 40, w: 38, h: 180 },
  { x: 338, y: 150, w: 65, h: 70 },
  { x: 408, y: 90, w: 42, h: 130 },
  { x: 455, y: 130, w: 60, h: 90 },
  { x: 520, y: 20, w: 46, h: 200 },
  { x: 570, y: 110, w: 50, h: 110 },
  { x: 625, y: 160, w: 70, h: 60 },
  { x: 700, y: 60, w: 40, h: 160 },
  { x: 745, y: 130, w: 55, h: 90 },
  { x: 805, y: 95, w: 45, h: 125 },
  { x: 855, y: 10, w: 50, h: 210 },
  { x: 910, y: 140, w: 65, h: 80 },
  { x: 980, y: 80, w: 42, h: 140 },
  { x: 1027, y: 150, w: 58, h: 70 },
  { x: 1090, y: 50, w: 40, h: 170 },
  { x: 1135, y: 120, w: 55, h: 100 },
  { x: 1195, y: 90, w: 46, h: 130 },
  { x: 1246, y: 160, w: 70, h: 60 },
  { x: 1320, y: 30, w: 44, h: 190 },
  { x: 1368, y: 115, w: 52, h: 105 },
  { x: 1424, y: 150, w: 66, h: 70 },
  { x: 1495, y: 70, w: 40, h: 150 },
  { x: 1540, y: 130, w: 60, h: 90 },
];

export function Skyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      data-testid="skyline"
    >
      <defs>
        <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#050507" />
        </linearGradient>
      </defs>
      <g fill="url(#skylineFade)">
        {BUILDINGS.map((b) => (
          <rect key={`${b.x}-${b.y}`} x={b.x} y={b.y} width={b.w} height={b.h} />
        ))}
      </g>
    </svg>
  );
}
