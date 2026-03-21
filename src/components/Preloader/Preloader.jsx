import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return visible ? <div className="preloader"></div> : null;
};

export default Preloader;
