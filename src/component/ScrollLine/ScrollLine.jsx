import React, { useEffect, useState } from "react";

const ScrollLine = () => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setLineHeight(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 border-l-4 bg-white"
        style={{ height: `${lineHeight}%` }}
      ></div>
    </div>
  );
};

export default ScrollLine;
