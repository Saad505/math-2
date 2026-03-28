import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseData } from "@/data/courseData";
import { motion } from "motion/react";
import { Star, User, Sparkles, Trophy } from "lucide-react";
import { getProgress } from "@/lib/progress";
import { getProfile, UserProfile } from "@/lib/profile";
import { MathBuddy } from "@/components/MathBuddy";
import { audioService } from "@/lib/audio";

export function Home() {
  const [progress, setProgress] = useState(getProgress());
  const [profile, setProfile] = useState<UserProfile>(getProfile());

  useEffect(() => {
    const handleStorage = () => {
      setProgress(getProgress());
      setProfile(getProfile());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gray-50 pb-24"
      onClick={() => audioService.init()}
    >
      <div className="bg-white pt-12 pb-8 rounded-b-[40px] shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-[20px] flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <MathBuddy size={44} className="scale-125" />
                )}
              </div>
              <div>
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Hi There,</p>
                <h2 className="text-2xl font-black text-gray-800">{profile.name || "Explorer"}!</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-yellow-100 px-4 py-2 rounded-2xl flex items-center gap-2 border-2 border-yellow-200 shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-black text-yellow-800 text-lg">{progress.stars}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[48px] p-10 text-white relative overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
            {/* SVG Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                  <pattern id="circles" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="15" fill="none" stroke="white" strokeWidth="2" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#circles)" />
              </svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/20 rounded-[24px] backdrop-blur-md">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white">Daily Adventure</h3>
                    <p className="text-white/80 font-bold text-lg">Continue your journey</p>
                  </div>
                </div>
                <div className="relative w-full max-w-md mt-8">
                  <div className="w-full bg-white/20 h-5 rounded-full overflow-hidden backdrop-blur-md border border-white/30">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "33%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-full rounded-full shadow-[0_0_20px_rgba(253,224,71,0.6)]" 
                    />
                  </div>
                  <div className="flex justify-between mt-3 px-1">
                    <span className="text-xs font-black uppercase tracking-tighter opacity-70">Start</span>
                    <span className="text-xs font-black uppercase tracking-tighter opacity-70">Goal</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <MathBuddy state="waving" size={140} className="-mr-4" />
              </div>
            </div>
            <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-white/10 -rotate-12 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <h2 className="text-2xl font-black text-gray-800 mb-6 ml-2">Choose a Topic</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {courseData.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/topic/${topic.id}`}
                  className={`block h-full p-5 rounded-[32px] ${topic.color} text-white shadow-lg transform transition-all active:scale-95 hover:-translate-y-1 hover:shadow-xl border-b-4 border-black/10`}
                >
                  <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-lg font-black leading-tight mb-1">{topic.title}</h2>
                  <p className="text-[10px] font-bold text-white/80 line-clamp-2 uppercase tracking-wide">
                    {topic.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
