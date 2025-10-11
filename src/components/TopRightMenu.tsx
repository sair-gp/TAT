import { useState } from "react";
import { ChartLine, DoorOpen, Shell, User2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useIsMobile } from "../hooks/UseIsMobile";

const TopRightMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile("(max-width: 640px)");
  return (
    <div
      className={cn(
        "absolute top-2 right-3 z-50 transition-transform duration-300",
        isMobile ? "scale-0 opacity-0" : "scale-100 opacity-100"
      )}
    >
      {/* === MENU TOGGLE BUTTON === */}
      <div className="relative flex justify-end">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "border-2 border-green-400 p-1 rounded-sm flex items-center justify-center",
            "bg-black text-green-400 hover:text-black hover:bg-green-400 transition-all duration-200",
            "shadow-[0_0_8px_rgba(0,255,0,0.4)] hover:shadow-[0_0_15px_rgba(0,255,0,0.7)]"
          )}
        >
          <Shell size={22} />
        </button>
      </div>

      {/* === DROPDOWN MENU === */}
      <div
        className={cn(
          "flex flex-col items-start mt-3 border border-green-400 bg-black text-green-400 rounded-sm overflow-hidden",
          "shadow-[0_0_12px_rgba(0,255,0,0.4)] backdrop-blur-sm",
          "transition-all duration-300 origin-top-right",
          isMenuOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        {/* === MENU ITEM === */}
        <MenuItem icon={<User2 size={16} />} label="Profile" />
        <MenuItem icon={<ChartLine size={16} />} label="Stats" />
        <MenuItem icon={<DoorOpen size={16} />} label="Log Out" borderBottom />
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  borderBottom?: boolean;
}

const MenuItem = ({ icon, label, borderBottom }: MenuItemProps) => (
  <div
    className={cn(
      "flex items-center gap-2 px-4 py-2 w-full cursor-pointer select-none text-sm font-mono",
      "hover:bg-green-400 hover:text-black transition-colors duration-150",
      borderBottom
        ? "border-t border-b border-green-400"
        : "border-t border-green-400"
    )}
  >
    {icon}
    <span>{label}</span>
  </div>
);

export default TopRightMenu;
