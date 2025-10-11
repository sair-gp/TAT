import React, { useState } from "react";
import { cn } from "../lib/utils";
import { SidebarIcon } from "./SidebarIcon.tsx";
import { Terminal, Cog, Clock, Bed, User, X, Menu } from "lucide-react";

interface MobileSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileSidebar = ({ className }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("h-screen w-screen", className)}>
      <div className="absolute top-1 left-1 flex flex-row justify-start w-screen">
        <button
          className={cn(
            "w-8 z-60 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-3xl hover:rounded-xl transition-all ease-linear duration-300",
            className
          )}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={cn(
          "flex flex-col bg-black h-screen w-screen py-10",
          isOpen ? "translate-x-0 z-50" : "translate-x-full hidden"
        )}
      >
        <div className="flex flex-col items-center hover:bg-green-500 hover:text-black hover:cursor-pointer transition-all duration-300">
          <SidebarIcon icon={<User />} sublabel="root" hover={false} />
          <span>John Doe</span>
        </div>

        <div className="flex flex-col items-center hover:bg-green-500 hover:text-black hover:cursor-pointer transition-all duration-300">
          <SidebarIcon icon={<Terminal />} hover={false} />
          <span>Dashboard</span>
        </div>
        <div className="flex flex-col items-center hover:bg-green-500 hover:text-black hover:cursor-pointer transition-all duration-300">
          <SidebarIcon icon={<Clock />} hover={false} />
          <span>Pomodoro</span>
        </div>
        <div className="flex flex-col items-center hover:bg-green-500 hover:text-black hover:cursor-pointer transition-all duration-300">
          <SidebarIcon icon={<Bed />} hover={false} />
          <span>Rest</span>
        </div>
        <div className="flex flex-col items-center hover:bg-green-500 hover:text-black hover:cursor-pointer transition-all duration-300">
          <SidebarIcon icon={<Cog />} hover={false} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
