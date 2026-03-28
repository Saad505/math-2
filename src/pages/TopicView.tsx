import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "@/data/courseData";
import { ArrowLeft, BookOpen, Zap, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { getCompletedLessons } from "@/lib/progress";
import { MathBuddy } from "@/components/MathBuddy";

export function TopicView() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const completedLessons = getCompletedLessons();

  const topic = courseData.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-600">Topic not found</h2>
        <button onClick={() => navigate("/")} className="mt-4 text-primary font-bold">
          Go Back Home
        </button>
      </div>
    );
  }

  const Icon = topic.icon;
  const learnLesson = topic.lessons.find(l => l.type === 'learn');
  const practiceLessons = topic.lessons.filter(l => l.type === 'practice');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className={`pt-12 pb-12 px-6 rounded-b-[40px] ${topic.color} text-white shadow-lg relative overflow-hidden`}>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          
          <button
            onClick={() => navigate("/")}
            className="absolute top-0 left-0 p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center text-center mt-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="bg-white/20 w-24 h-24 rounded-[32px] flex items-center justify-center mb-6 backdrop-blur-md shadow-xl border border-white/30">
                <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </motion.div>
            <h1 className="text-4xl font-black tracking-tight mb-3 drop-shadow-sm">{topic.title}</h1>
            <p className="text-white/90 font-bold max-w-xs text-lg">{topic.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Learn Card */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/topic/${topic.id}/learn`)}
            className="bg-white p-6 rounded-[32px] shadow-xl border-2 border-blue-100 flex items-center group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform" />
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-black text-gray-800">Learn</h3>
              <p className="text-gray-500 font-bold">Watch & Learn</p>
            </div>
            <ChevronRight className="w-8 h-8 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Practice Card */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (practiceLessons.length > 0) {
                navigate(`/topic/${topic.id}/lesson/${practiceLessons[0].id}`);
              }
            }}
            className="bg-white p-6 rounded-[32px] shadow-xl border-2 border-green-100 flex items-center group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform" />
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-5 shadow-inner">
              <Zap className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-black text-gray-800">Practice</h3>
              <p className="text-gray-500 font-bold">Solve Puzzles</p>
            </div>
            <ChevronRight className="w-8 h-8 text-green-300 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Individual Lessons List (Optional, if multiple practice lessons) */}
        {practiceLessons.length > 1 && (
          <div className="mt-12">
            <h2 className="text-xl font-black text-gray-800 mb-4 ml-2">More Practice</h2>
            <div className="space-y-4">
              {practiceLessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => navigate(`/topic/${topic.id}/lesson/${lesson.id}`)}
                      className="w-full flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                          isCompleted ? "bg-green-100 text-green-500" : "bg-blue-50 text-blue-500"
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-bold text-gray-800">{lesson.title}</h3>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-300" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlayCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}
