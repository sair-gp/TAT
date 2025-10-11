import { cn } from "../lib/utils";

interface SidebarIconProps {
  icon: React.ReactNode;
  text?: string;
  sublabel?: string;
  hover?: boolean;
}

export const SidebarIcon = ({
  icon,
  text,
  sublabel,
  hover,
}: SidebarIconProps) => {
  return (
    // CAMBIO CLAVE: El div principal es el grupo y usa flex-col
    // Añadimos mt-1/mb-1 (o ajustamos mt-2/mb-2 de .sidebar-icon) para reducir espacio.
    <div className="sidebar-icon group flex flex-col items-center justify-center pt-2 pb-2 group">
      {/* 1. El Icono Principal */}
      {icon}

      {/* 2. La Subetiqueta (Texto Fijo "root") */}
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

      {/* 3. El Tooltip de Hover (¡Se mantiene!) */}
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
};
