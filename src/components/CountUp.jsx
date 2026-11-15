import { useEffect, useState } from "react";

export default function CountUp({ to, duration = 1500, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Hormati pengaturan sistem yang mematikan animasi
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // melambat di akhir
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);

  return (
    <span className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}