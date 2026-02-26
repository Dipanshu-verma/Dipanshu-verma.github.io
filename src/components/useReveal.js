import { useEffect, useRef } from 'react';

/**
 * Attach Intersection Observer to a container ref.
 * All children with class `reveal`, `reveal-left`, or `reveal-right`
 * will get `.visible` added when they enter the viewport.
 */
const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
};

export default useReveal;
