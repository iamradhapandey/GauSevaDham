import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      const currentPosition = window.pageYOffset;
      const duration = 800; // Duration in milliseconds
      const start = performance.now();

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, currentPosition * (1 - easeInOutCubic(progress)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;