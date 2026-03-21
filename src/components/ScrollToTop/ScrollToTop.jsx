import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div
      className="scroll-to-top scroll-to-target"
      onClick={scrollToTop}
      data-target="html"
    >
      <span className="fa fa-angle-up"></span>
    </div>
  ) : null;
};

export default ScrollToTop;
