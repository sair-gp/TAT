import { Terminal, Cog, Clock, Bed, User } from "lucide-react";
import { cn } from "../lib/utils.js";
import { SidebarIcon } from "./SidebarIcon.tsx";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 h-screen w-16 m-0 bg-black terminal-text border-r-2 border-green-400",
        className,
      )}
    >
      <div className="mb-1">
        <SidebarIcon
          icon={<User />}
          text="Profile"
          sublabel="root"
          hover={true}
        />
      </div>
      <div className="mb-1 w-full text-center">
        <span className="text-green-400 font-mono text-xs">-------</span>
      </div>
      <SidebarIcon
        icon={<Terminal />}
        text="Dashboard"
        hover={true}
        link="/dashboard"
      />
      <SidebarIcon
        icon={<Clock />}
        text="Pomodoro"
        hover={true}
        link="pomodoro"
      />
      <SidebarIcon icon={<Bed />} text="Resting" hover={true} />
      <div className="grow"></div>
      <SidebarIcon icon={<Cog />} text="Settings" hover={true} />
    </div>
  );
};
