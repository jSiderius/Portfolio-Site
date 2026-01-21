import { useRef, useState, useEffect } from "react";

export const GlowBox = () => {
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    // TODO: Save the percentage of the path distance such that if there is a resize it doesn't start over
    const svg = pathRef.current?.ownerSVGElement;
    if (!svg) return;

    const observer = new ResizeObserver(() => {
      const { width, height } = svg.getBoundingClientRect();
      setSvgSize({ width, height });
    });

    observer.observe(svg);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    const svg = path?.ownerSVGElement;

    if (!path || !svg) return;

    const { width, height } = svg.getBoundingClientRect();
    const length =
      8 * (width + height) +
      4 * Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));

    const dashLength = length * 0.04;
    path.style.strokeDasharray = `${dashLength} ${length - dashLength}`;

    let start: number | null = null;
    function animate(t: number) {
      if (!path) return;
      if (!start) {
        start = t;
      }

      const progress = (t - start) / 50000;
      path.style.strokeDashoffset = `${(-progress * length) % length}`;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      start = null;
    };
  }, [svgSize]);

  return (
    <div className="glow-box">
      <svg
        className="glow-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          className="glow-path"
          d="
			M0 0
			H 100
			V 100 
			H 0 
			V 0

			L50 50
			L100 0
			H0

			V100
			H100
			V0
			H0
			
			V100
			H100
			V0
			L50 50
			L0 0

			H100 
			V100 
			H0 
			Z
			"
          fill="none"
        ></path>
      </svg>
    </div>
  );
};
