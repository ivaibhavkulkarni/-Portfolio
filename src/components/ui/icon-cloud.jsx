"use client";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#080510" : "#f3f2ef";
  const fallbackHex = theme === "dark" ? "#ffffff" : "#6e6e73";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs = [], imageArray = [] }) {
  const [data, setData] = useState(null);
  const { theme, resolvedTheme } = useTheme();
  
  // Use resolvedTheme as fallback if theme isn't set yet
  const currentTheme = theme || resolvedTheme || "light";

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data?.simpleIcons) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, currentTheme)
    );
  }, [data, currentTheme]);

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
      {imageArray.length > 0 &&
        imageArray.map((image, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <img
              height={42}
              width={42}
              alt={`Custom image ${index + 1}`}
              src={image}
              className="transition-all duration-200 hover:brightness-110"
            />
          </a>
        ))}
    </Cloud>
  );
}