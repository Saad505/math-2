import { Link, useLocation } from "react-router-dom";
import { Home, Star, Settings } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Star, label: "Progress", path: "/progress" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const isLessonView = location.pathname.includes("/lesson/") || location.pathname.includes("/learn");

  if (isLessonView) return null;

  return (
    <nav className="fixed bottom-0 md:bottom-10 left-0 right-0 flex justify-center z-50 pointer-events-none px-4">
      <div className="flex justify-around items-center h-20 md:h-24 w-full max-w-md md:max-w-xl bg-white/90 backdrop-blur-xl border-t-4 md:border-4 border-gray-100 rounded-t-[32px] md:rounded-[48px] px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:shadow-2xl pointer-events-auto transition-all">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center min-w-[70px] h-full transition-all relative group",
                isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute -top-1 w-12 h-1.5 bg-primary rounded-full"
                />
              )}
              <Icon 
                className={cn(
                  "w-7 h-7 mb-1.5 transition-all group-hover:scale-110",
                  isActive && "scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                )} 
                strokeWidth={isActive ? 3 : 2}
              />
              <span className="text-[11px] font-black uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
