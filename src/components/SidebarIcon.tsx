import { cn } from "../lib/utils";
import { Link } from "react-router-dom"; // Make sure react-router-dom is installed!

interface SidebarIconProps {
  icon: React.ReactNode;
  text?: string;
  sublabel?: string;
  hover?: boolean;
  link?: string;
}

export const SidebarIcon = ({
  icon,
  text,
  sublabel,
  hover,
  link, // Removed default value '0' from destructuring, check condition below instead.
}: SidebarIconProps) => {
  // Use a proper condition: a link string exists and isn't empty/falsy.
  const isLink = link && link !== "0";

  // The content to be rendered, which is the visual part of the icon.
  const iconContent = (
    // The div/Link contains all the visual elements
    <div className="sidebar-icon group flex flex-col items-center justify-center pt-2 pb-2 group">
      {/* 1. The Main Icon */}
      {icon}

      {/* 2. The Sublabel (Fixed Text) */}
      {sublabel && (
        <span
          className={cn(
            "text-xs font-mono text-green-400 mt-[-4px]",
            hover ? "group-hover:text-black" : ""
          )}
        >
          {sublabel}
        </span>
      )}

      {/* 3. The Hover Tooltip (Stays!) */}
      <span
        className={cn(
          "absolute left-14 p-2 m-2 min-w-max rounded-md shadow-md text-green-400 bg-black text-xs font-mono scale-0",
          hover
            ? "group-hover:scale-100 transition-all duration-100 origin-left animate-pulse"
            : ""
        )}
      >
        {text}
      </span>
    </div>
  );

  return isLink ? (
    // If it is a link, wrap the content in <Link>
    <Link to={link}>{iconContent}</Link>
  ) : (
    // If not a link, render the content as is (inside a div, which is part of iconContent)
    iconContent
  );
};