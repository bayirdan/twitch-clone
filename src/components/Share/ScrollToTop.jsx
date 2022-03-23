import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// scroll reset for page changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
