import { courseData } from "@/data/courseData";
import { useNavigate } from "react-router-dom";
import { Star, Trophy, Target, Flame, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ProgressBar } from "@/components/ProgressBar";
import { getProgress } from "@/lib/progress";
import { getBadges } from "@/lib/awards";
import { cn } from "@/lib/utils";

export function Progress() {
  const navigate = useNavigate();
  const progress = getProgress();
  const totalLessons = courseData.reduce((acc, topic) => acc + topic.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const isFullyComplete = completedLessons === totalLessons;
  const totalStars = progress.stars;
  const currentStreak = progress.streak || 0;

  // Calculate level based on stars (e.g., 10 stars per level)
  const currentLevel = Math.floor(totalStars / 10) + 1;

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-8 underline-offset-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-8">My Progress</h1>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-2xl font-black text-gray-800">{totalStars}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Stars</p>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
            </div>
            <p className="text-2xl font-black text-gray-800">{currentStreak}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Streak</p>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Trophy className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-black text-gray-800">{currentLevel}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Level</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
          {isFullyComplete && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rotate-45 translate-x-8 -translate-y-8 flex items-end justify-center pb-2">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
          )}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <Target className="w-6 h-6 mr-2 text-primary" />
              Course Completion
            </h2>
            <span className="font-black text-primary">{Math.round((completedLessons / totalLessons) * 100)}%</span>
          </div>
          <ProgressBar progress={completedLessons} total={totalLessons} className="h-6" color={isFullyComplete ? "bg-green-500" : "bg-primary"} />
          <p className="text-sm font-bold text-gray-400 mt-3 text-center">
            {completedLessons} out of {totalLessons} lessons completed
          </p>

          {isFullyComplete && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => navigate('/certificate')}
              className="w-full mt-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-black text-lg rounded-2xl shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-6 h-6" /> Claim Your Certificate
            </motion.button>
          )}
        </div>

        <h2 className="text-xl font-black text-gray-800 mb-4 mt-8">Achievement Badges</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
          {getBadges().map((badge) => (
            <div 
              key={badge.id} 
              className={cn(
                "aspect-square rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 shadow-sm",
                badge.unlockedAt ? "bg-white border-2 border-yellow-200 grayscale-0" : "bg-gray-100 border-2 border-gray-100 grayscale opacity-40"
              )}
              title={badge.name}
            >
              {badge.icon}
            </div>
          ))}
        </div>

        <h2 className="text-xl font-black text-gray-800 mb-4">Topic Mastery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseData.map((topic) => {
            const Icon = topic.icon;
            const topicCompleted = topic.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
            const topicTotal = topic.lessons.length;
            
            return (
              <div key={topic.id} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mr-5 ${topic.color} text-white shadow-inner flex-shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-gray-800 text-lg">{topic.title}</h3>
                    <span className="text-sm font-black text-gray-400">{topicCompleted}/{topicTotal}</span>
                  </div>
                  <ProgressBar progress={topicCompleted} total={topicTotal} className="h-2.5" color={topic.color} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
