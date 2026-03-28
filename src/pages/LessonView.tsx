import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "@/data/courseData";
import { ArrowLeft, Check, X, Star, Volume2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { completeLesson } from "@/lib/progress";
import { MathBuddy } from "@/components/MathBuddy";
import { checkNewAwards, Badge } from "@/lib/awards";
import { audioService } from "@/lib/audio";

export function LessonView() {
  const { topicId, lessonId } = useParams();
  const navigate = useNavigate();

  const topic = courseData.find((t) => t.id === topicId);
  const lesson = topic?.lessons.find((l) => l.id === lessonId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<Badge[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (isFinished && lessonId) {
      const starsEarned = Math.max(1, Math.floor(score / 2));
      completeLesson(lessonId, starsEarned);
      
      // Check for new awards
      const newlyUnlocked = checkNewAwards();
      setUnlockedBadges(newlyUnlocked);
    }
  }, [isFinished, lessonId, score]);

  const handleReadAloud = () => {
    if (currentQuestion) {
      audioService.speak(currentQuestion.text);
    }
  };

  if (!topic || !lesson) {
    return <div>Lesson not found</div>;
  }

  const questions = lesson.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF6B6B", "#4ECDC4", "#FFE66D"],
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      setIsFinished(true);
      // Save progress to local storage here
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-[40px] shadow-xl max-w-sm w-full"
        >
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
          </div>
          <h1 className="text-3xl font-black text-gray-800 mb-2">Awesome!</h1>
          <p className="text-gray-500 font-bold mb-6 text-lg">
            You scored {score} out of {questions.length}
          </p>

          {unlockedBadges.length > 0 && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-8 p-4 bg-yellow-50 rounded-3xl border-2 border-yellow-200"
            >
              <p className="text-yellow-700 font-black text-sm uppercase mb-3">New Badges Earned!</p>
              <div className="flex justify-center gap-3">
                {unlockedBadges.map(b => (
                  <div key={b.id} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm border border-yellow-100 animate-bounce">
                    {b.icon}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <button
            onClick={() => navigate(`/topic/${topicId}`)}
            className="w-full py-4 bg-primary text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-primary/90 active:scale-95 transition-all"
          >
            Back to Lessons
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Contextual Peeking Mascot - Central Interaction */}
      <AnimatePresence>
        {(isCorrect === false || isFinished) && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: isFinished ? 0 : -50, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            className={cn(
              "fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none",
              isCorrect === false && "bg-black/10 backdrop-blur-[2px]"
            )}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="pointer-events-auto cursor-pointer flex flex-col items-center"
              onClick={() => isCorrect === false && setShowHint(true)}
            >
              <MathBuddy 
                state={isFinished ? "celebrating" : "thinking"} 
                size={isFinished ? 180 : 160} 
                className="drop-shadow-2xl" 
              />
              
              <AnimatePresence>
                {showHint && isCorrect === false && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mt-6 bg-white p-6 rounded-[32px] shadow-2xl border-2 border-blue-100 max-w-xs text-center relative"
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-l-2 border-t-2 border-blue-100 rotate-45" />
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Psst! The answer is:</p>
                      <p className="text-3xl font-black text-green-500">{currentQuestion.answer}</p>
                    </div>
                    <div className="h-px bg-gray-100 w-full mb-4" />
                    <p className="text-blue-600 font-bold mb-4 text-sm leading-relaxed">
                      <span className="text-blue-400 text-xs block uppercase mb-1">Quick Hint:</span>
                      {currentQuestion.hint || "Keep trying, you're doing great!"}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCorrect(null);
                        setSelectedAnswer(null);
                        setShowHint(false);
                      }}
                      className="bg-blue-500 text-white w-full py-3 rounded-2xl font-black shadow-lg hover:bg-blue-600 active:scale-95 transition-all"
                    >
                      Try Again!
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="bg-white px-4 py-4 flex items-center shadow-sm sticky top-0 z-10 pt-[env(safe-area-inset-top)]">
        <button
          onClick={() => navigate(`/topic/${topicId}`)}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-4">
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
            <motion.div
              className={cn("h-full transition-all duration-700 ease-out", topic.color)}
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestionIndex + (isCorrect ? 1 : 0)) / lesson.questions!.length) * 100}%` }}
            />
          </div>
        </div>
        <button 
          onClick={handleReadAloud}
          className="p-2 bg-blue-50 text-blue-600 rounded-xl mr-2 active:scale-95 transition-transform"
        >
          <Volume2 className="w-5 h-5" />
        </button>
        <div className="font-black text-gray-400 text-sm">
          {Math.min(currentQuestionIndex + 1, lesson.questions!.length)}/{lesson.questions!.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-8 pb-40 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            className="flex-1 flex flex-col pt-4"
          >
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h2 className="text-3xl font-black text-gray-800 leading-tight">
                    {currentQuestion.text}
                  </h2>
                  <button 
                    onClick={handleReadAloud}
                    className="p-4 bg-blue-100 rounded-2xl text-blue-600 shadow-sm active:scale-90 transition-all hover:bg-blue-200"
                  >
                    <Volume2 className="w-6 h-6" />
                  </button>
                </div>

                {currentQuestion.image && (
                  <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform rotate-1 mb-8">
                    <img 
                      src={currentQuestion.image} 
                      alt="Question visual aid" 
                      className="w-full h-64 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {currentQuestion.options?.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrectOption = option === currentQuestion.answer;
                    
                    let buttonClass = "bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50";
                    
                    if (selectedAnswer !== null) {
                      if (isCorrectOption) {
                        buttonClass = "bg-green-100 border-2 border-green-500 text-green-700";
                      } else if (isSelected && !isCorrectOption) {
                        buttonClass = "bg-red-100 border-2 border-red-500 text-red-700";
                      } else {
                        buttonClass = "bg-gray-50 border-2 border-gray-200 text-gray-400 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(option)}
                        disabled={selectedAnswer !== null}
                        className={cn(
                          "w-full p-6 rounded-3xl text-xl font-black text-left transition-all flex items-center justify-between shadow-sm active:scale-[0.98]",
                          buttonClass
                        )}
                      >
                        <span>{option}</span>
                        {selectedAnswer !== null && isCorrectOption && (
                          <Check className="w-6 h-6 text-green-600" strokeWidth={4} />
                        )}
                        {selectedAnswer !== null && isSelected && !isCorrectOption && (
                          <X className="w-6 h-6 text-red-600" strokeWidth={4} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Action */}
        <div className="mt-auto pt-4 mb-32">
          {selectedAnswer !== null && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white p-6 rounded-[40px] shadow-2xl border-2 border-gray-100 relative overflow-hidden"
            >
              {/* Decorative background for feedback */}
              <div className={cn(
                "absolute top-0 right-0 w-24 h-24 -z-10 opacity-10 rounded-bl-full",
                isCorrect ? "bg-green-500" : "bg-red-500"
              )} />

              {!isCorrect && (
                <div className="mb-4">
                  {!showHint ? (
                    <button 
                      onClick={() => setShowHint(true)}
                      className="text-primary font-black text-sm uppercase tracking-widest hover:underline flex items-center gap-2 mx-auto"
                    >
                      <Sparkles className="w-4 h-4" /> Need a hint?
                    </button>
                  ) : (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 bg-blue-50 rounded-2xl border-2 border-blue-100 text-blue-800 font-bold text-center italic"
                    >
                      💡 {currentQuestion.explanation || "Try to think about the numbers again!"}
                    </motion.div>
                  )}
                </div>
              )}

              <button
                onClick={handleNext}
                className={cn(
                  "w-full py-4 rounded-2xl font-black text-white text-xl shadow-lg active:scale-95 transition-all transform hover:-translate-y-1",
                  isCorrect ? "bg-green-500 hover:bg-green-600 shadow-green-200" : "bg-blue-500 hover:bg-blue-600 shadow-blue-200"
                )}
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Lesson"}
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
