import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "@/data/courseData";
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Star, Plus, Minus, CheckCircle2, Scale, Grid3X3, Shapes, Clock, Banknote, Ruler, SlidersHorizontal, Move, Circle, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MathBuddy } from "@/components/MathBuddy";
import { audioService } from "@/lib/audio";

// --- Interactive Components ---

function InteractiveCounter({ data }: { data: { target: number; label: string } }) {
  const [count, setCount] = useState(0);

  const getEmoji = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('apple')) return '🍎';
    if (l.includes('cookie')) return '🍪';
    if (l.includes('star')) return '⭐';
    if (l.includes('candy') || l.includes('candies')) return '🍬';
    if (l.includes('marble')) return '🔵';
    if (l.includes('coin') || l.includes('taka')) return '🪙';
    if (l.includes('clock') || l.includes('time') || l.includes('second')) return '⏱️';
    if (l.includes('water') || l.includes('ml') || l.includes('liter')) return '💧';
    if (l.includes('shape') || l.includes('side') || l.includes('corner') || l.includes('face') || l.includes('vertic')) return '🔺';
    return '✨';
  };

  const emoji = getEmoji(data.label);

  return (
    <div className="bg-blue-50 p-6 rounded-[32px] border-2 border-blue-100 w-full mt-6 shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-black text-blue-800 uppercase tracking-widest text-sm">Tap to Add {data.label}</h4>
        <div className="bg-white px-4 py-1 rounded-full shadow-sm border border-blue-200">
          <span className="font-black text-blue-600">{count} / {data.target}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center min-h-[120px] mb-6">
        <AnimatePresence>
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0 }}
              className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white"
            >
              <span className="text-2xl">{emoji}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(Math.max(0, count - 1))}
          className="flex-1 bg-white p-4 rounded-2xl shadow-md border-2 border-blue-200 text-blue-500 active:scale-90 transition-transform"
        >
          <Minus className="w-8 h-8 mx-auto" strokeWidth={3} />
        </button>
        <button
          onClick={() => setCount(Math.min(data.target, count + 1))}
          className="flex-1 bg-blue-500 p-4 rounded-2xl shadow-lg border-2 border-blue-400 text-white active:scale-90 transition-transform"
        >
          <Plus className="w-8 h-8 mx-auto" strokeWidth={3} />
        </button>
      </div>
      
      {count === data.target && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" /> Awesome Job!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveMatcher({ data }: { data: { pairs: { left: string; right: string }[] } }) {
  const [leftItems, setLeftItems] = useState<{ id: number; text: string }[]>([]);
  const [rightItems, setRightItems] = useState<{ id: number; text: string }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);

  useEffect(() => {
    const pairs = data.pairs || [];
    const lefts = pairs.map((p, i) => ({ id: i, text: p.left }));
    const rights = pairs.map((p, i) => ({ id: i, text: p.right }));
    
    // Simple shuffle
    setLeftItems(lefts.sort(() => Math.random() - 0.5));
    setRightItems(rights.sort(() => Math.random() - 0.5));
  }, [data.pairs]);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        setMatchedPairs(prev => [...prev, selectedLeft]);
      }
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  }, [selectedLeft, selectedRight]);

  const isComplete = matchedPairs.length === (data.pairs?.length || 0) && matchedPairs.length > 0;

  return (
    <div className="bg-purple-50 p-6 rounded-[32px] border-2 border-purple-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-purple-800 uppercase tracking-widest text-sm mb-6 text-center">Match the Pairs!</h4>
      
      <div className="flex justify-between gap-4">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-3">
          {leftItems.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedLeft === item.id;
            return (
              <motion.button
                key={`l-${item.id}`}
                whileTap={!isMatched ? { scale: 0.95 } : {}}
                onClick={() => !isMatched && setSelectedLeft(item.id)}
                disabled={isMatched}
                className={`p-4 rounded-2xl border-2 font-black text-sm transition-all ${
                  isMatched ? "bg-purple-100 border-purple-200 text-purple-300 opacity-50" :
                  isSelected ? "bg-purple-500 border-purple-600 text-white shadow-lg" :
                  "bg-white border-purple-200 text-purple-700 shadow-sm hover:border-purple-400"
                }`}
              >
                {item.text}
              </motion.button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-3">
          {rightItems.map((item) => {
            const isMatched = matchedPairs.includes(item.id);
            const isSelected = selectedRight === item.id;
            return (
              <motion.button
                key={`r-${item.id}`}
                whileTap={!isMatched ? { scale: 0.95 } : {}}
                onClick={() => !isMatched && setSelectedRight(item.id)}
                disabled={isMatched}
                className={`p-4 rounded-2xl border-2 font-black text-sm transition-all ${
                  isMatched ? "bg-purple-100 border-purple-200 text-purple-300 opacity-50" :
                  isSelected ? "bg-purple-500 border-purple-600 text-white shadow-lg" :
                  "bg-white border-purple-200 text-purple-700 shadow-sm hover:border-purple-400"
                }`}
              >
                {item.text}
              </motion.button>
            );
          })}
        </div>
      </div>

      {isComplete && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-6 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <CheckCircle2 className="w-6 h-6" /> All Matched!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveSorter({ data }: { data: { items: { id: string; label?: string; text?: string; value?: number; order?: number }[] } }) {
  const [order, setOrder] = useState<string[]>([]);
  const [shuffledItems] = useState(() => [...(data.items || [])].sort(() => Math.random() - 0.5));
  
  const isCorrect = order.length === (data.items?.length || 0) && 
    order.every((id, i) => id === [...(data.items || [])].sort((a, b) => (a.value ?? a.order ?? 0) - (b.value ?? b.order ?? 0))[i].id);

  const toggleItem = (id: string) => {
    if (order.includes(id)) {
      setOrder(order.filter(i => i !== id));
    } else {
      setOrder([...order, id]);
    }
  };

  return (
    <div className="bg-orange-50 p-6 rounded-[32px] border-2 border-orange-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-orange-800 uppercase tracking-widest text-sm mb-4 text-center">Tap in Order (Smallest to Biggest)</h4>
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {shuffledItems.map((item) => {
          const orderIdx = order.indexOf(item.id);
          return (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => toggleItem(item.id)}
              className={`w-20 h-20 rounded-2xl border-2 font-black text-xl flex items-center justify-center transition-all relative ${
                orderIdx !== -1 
                  ? "bg-orange-500 border-orange-600 text-white shadow-lg" 
                  : "bg-white border-orange-200 text-orange-700 shadow-sm"
              }`}
            >
              {item.label || item.text}
              {orderIdx !== -1 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-orange-500 rounded-full text-xs flex items-center justify-center border border-orange-200 shadow-sm">
                  {orderIdx + 1}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
      {order.length === data.items.length && (
        <div className="text-center">
          {isCorrect ? (
            <p className="text-green-600 font-black flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Perfect Order!
            </p>
          ) : (
            <button onClick={() => setOrder([])} className="text-orange-500 font-black text-sm underline">
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function InteractiveNumberLine({ data }: { data: { start?: number; end?: number; min?: number; max?: number; range?: [number, number]; step: number; target?: number } }) {
  const start = data.start ?? data.min ?? data.range?.[0] ?? 0;
  const end = data.end ?? data.max ?? data.range?.[1] ?? 10;
  const [pos, setPos] = useState(start);
  const steps = [];
  const step = data.step || 1;
  for (let i = start; i <= end; i += step) steps.push(i);

  const isCorrect = data.target !== undefined && pos === data.target;

  return (
    <div className="bg-green-50 p-6 rounded-[32px] border-2 border-green-100 w-full mt-6 shadow-inner overflow-hidden">
      <h4 className="font-black text-green-800 uppercase tracking-widest text-sm mb-8 text-center">
        {data.target !== undefined ? `Jump to ${data.target}!` : "Jump Along the Line!"}
      </h4>
      <div className="relative h-24 flex items-center px-4">
        <div className="absolute left-4 right-4 h-1 bg-green-300 rounded-full" />
        <div className="flex justify-between w-full relative z-10">
          {steps.map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div className={`w-1 h-4 ${s === pos ? "bg-green-600 w-2" : "bg-green-300"} rounded-full mb-2`} />
              <span className={`text-xs font-black ${s === pos ? "text-green-600 scale-125" : "text-green-400"} transition-all`}>
                {s}
              </span>
            </div>
          ))}
        </div>
        <motion.div
          animate={{ x: steps.indexOf(pos) * (100 / (steps.length - 1)) + "%" }}
          className="absolute left-4 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-green-500 flex items-center justify-center -translate-x-1/2 z-20"
        >
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
        </motion.div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => setPos(Math.max(start, pos - step))}
          className="flex-1 bg-white p-4 rounded-2xl shadow-md border-2 border-green-200 text-green-500 active:scale-90"
        >
          <ChevronLeft className="w-8 h-8 mx-auto" />
        </button>
        <button
          onClick={() => setPos(Math.min(end, pos + step))}
          className="flex-1 bg-green-500 p-4 rounded-2xl shadow-lg border-2 border-green-400 text-white active:scale-90"
        >
          <ChevronRight className="w-8 h-8 mx-auto" />
        </button>
      </div>
      {isCorrect && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> You found it!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveChoice({ data }: { data: { question: string; options: any[]; answer?: string } }) {
  const [selected, setSelected] = useState<string | null>(null);

  const normalizedOptions = data.options.map(opt => 
    typeof opt === 'string' ? { label: opt, isCorrect: opt === data.answer } : opt
  );

  return (
    <div className="bg-blue-50 p-6 rounded-[32px] border-2 border-blue-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-blue-800 uppercase tracking-widest text-sm mb-4 text-center">{data.question}</h4>
      <div className="grid grid-cols-2 gap-3">
        {normalizedOptions.map((opt, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(opt.label)}
            className={`p-4 rounded-2xl border-2 font-black text-lg transition-all ${
              selected === opt.label 
                ? opt.isCorrect ? "bg-green-500 border-green-600 text-white" : "bg-red-500 border-red-600 text-white"
                : "bg-white border-blue-200 text-blue-700"
            }`}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>
      {selected !== null && normalizedOptions.find(o => o.label === selected)?.isCorrect && (
        <p className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Correct!
        </p>
      )}
    </div>
  );
}

function InteractivePattern({ data }: { data: { sequence: any[]; options?: any[]; answer: any } }) {
  const [selected, setSelected] = useState<any>(null);

  // Auto-generate options if missing
  const options = data.options || (() => {
    if (typeof data.answer === 'number') {
      // Generate some plausible number options
      const diff = data.sequence.length >= 2 ? Number(data.sequence[1]) - Number(data.sequence[0]) : 1;
      return [data.answer - diff, data.answer, data.answer + diff].sort(() => Math.random() - 0.5);
    } else {
      // Use unique items from the sequence
      return Array.from(new Set([...data.sequence, data.answer])).sort(() => Math.random() - 0.5);
    }
  })();

  return (
    <div className="bg-pink-50 p-6 rounded-[32px] border-2 border-pink-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-pink-800 uppercase tracking-widest text-sm mb-4 text-center">Complete the Pattern!</h4>
      <div className="flex justify-center gap-2 mb-6 bg-white p-4 rounded-2xl shadow-sm">
        {data.sequence.map((item, i) => (
          <div key={i} className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-xl shadow-sm border border-pink-200">
            {item}
          </div>
        ))}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl border-2 border-dashed border-pink-400 ${selected ? 'bg-pink-500 text-white border-solid' : 'bg-pink-50'}`}>
          {selected || "?"}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-3">
        {options.map((opt: any, i: number) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelected(opt)}
            className={`min-w-[3rem] h-12 px-2 rounded-xl border-2 font-black text-xl transition-all ${
              selected === opt ? "bg-pink-500 border-pink-600 text-white shadow-lg" : "bg-white border-pink-200 text-pink-700 shadow-sm"
            }`}
          >
            {opt}
          </motion.button>
        ))}
      </div>
      {selected === data.answer && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> Pattern Complete!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveBalance({ data }: { data: { left?: number; right: number; label?: string; options?: number[] } }) {
  // If options are provided, user selects one option to balance against 'left' or 'right'
  // If no options, user adds up to 'right'
  const hasOptions = Array.isArray(data.options) && data.options.length > 0;
  
  // If hasOptions, we assume the target is either left or right (whichever is provided, usually they are the same in the data)
  const target = data.left !== undefined ? data.left : data.right;
  
  const [currentValue, setCurrentValue] = useState(0);
  const isBalanced = currentValue === target;
  const tilt = isBalanced ? 0 : currentValue < target ? 10 : -10;

  return (
    <div className="bg-emerald-50 p-6 rounded-[32px] border-2 border-emerald-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-emerald-800 uppercase tracking-widest text-sm mb-4 text-center">Balance the Scale!</h4>
      <div className="relative h-32 flex items-end justify-center mb-6">
        <motion.div 
          animate={{ rotate: tilt }}
          className="w-full h-2 bg-emerald-800 rounded-full relative flex justify-between px-10"
        >
          <div className="absolute top-[-40px] left-4 w-16 h-16 bg-white rounded-2xl border-2 border-emerald-200 flex items-center justify-center shadow-md">
            <span className="font-black text-emerald-600 text-xl">{currentValue}</span>
          </div>
          <div className="absolute top-[-40px] right-4 w-16 h-16 bg-emerald-500 rounded-2xl border-2 border-emerald-600 flex items-center justify-center shadow-md text-white">
            <span className="font-black text-xl">{target}</span>
          </div>
        </motion.div>
        <div className="w-8 h-12 bg-emerald-800 rounded-t-full" />
      </div>
      <div className="flex gap-3">
        {hasOptions ? (
          data.options!.map(val => (
            <button
              key={val}
              onClick={() => setCurrentValue(val)}
              className={`flex-1 p-3 rounded-xl border-2 font-black shadow-sm active:scale-90 transition-transform ${
                currentValue === val ? "bg-emerald-500 text-white border-emerald-600" : "bg-white text-emerald-600 border-emerald-200"
              }`}
            >
              {val}
            </button>
          ))
        ) : (
          <>
            {[1, 5, 10].map(val => (
              <button
                key={val}
                onClick={() => setCurrentValue(currentValue + val)}
                className="flex-1 bg-white p-3 rounded-xl border-2 border-emerald-200 font-black text-emerald-600 shadow-sm active:scale-90 transition-transform"
              >
                +{val}
              </button>
            ))}
            <button
              onClick={() => setCurrentValue(0)}
              className="bg-red-100 p-3 rounded-xl border-2 border-red-200 font-black text-red-600 shadow-sm active:scale-90 transition-transform"
            >
              Reset
            </button>
          </>
        )}
      </div>
      {isBalanced && currentValue > 0 && (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Scale className="w-5 h-5" /> Perfectly Balanced!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveGrid({ data }: { data: { rows: number; cols: number; target?: number; items?: { id: string; content: string; correct: boolean }[] } }) {
  const [selected, setSelected] = useState<number[]>([]);
  
  const toggleCell = (idx: number) => {
    if (data.items) {
      if (selected.includes(idx)) {
        setSelected(selected.filter(i => i !== idx));
      } else {
        setSelected([...selected, idx]);
      }
    } else if (data.target) {
      if (selected.includes(idx)) {
        setSelected(selected.filter(i => i !== idx));
      } else if (selected.length < data.target) {
        setSelected([...selected, idx]);
      }
    }
  };

  const isComplete = data.items 
    ? data.items.every((item, i) => item.correct ? selected.includes(i) : !selected.includes(i))
    : selected.length === data.target;

  return (
    <div className="bg-cyan-50 p-6 rounded-[32px] border-2 border-cyan-100 w-full mt-6 shadow-inner">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-black text-cyan-800 uppercase tracking-widest text-sm">
          {data.items ? "Select the correct items" : `Fill ${data.target} Cells`}
        </h4>
        {!data.items && data.target && (
          <span className="font-black text-cyan-600 bg-white px-3 py-1 rounded-full border border-cyan-200">{selected.length} / {data.target}</span>
        )}
      </div>
      <div 
        className="grid gap-2 mx-auto" 
        style={{ gridTemplateColumns: `repeat(${data.cols}, minmax(0, 1fr))`, width: 'fit-content' }}
      >
        {Array.from({ length: data.rows * data.cols }).map((_, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleCell(i)}
            className={`w-16 h-16 rounded-lg border-2 transition-all flex items-center justify-center font-bold text-sm ${
              selected.includes(i) 
                ? (data.items ? (data.items[i].correct ? "bg-green-500 border-green-600 text-white shadow-lg" : "bg-red-500 border-red-600 text-white shadow-lg") : "bg-cyan-500 border-cyan-600 shadow-lg") 
                : "bg-white border-cyan-100 text-cyan-800"
            }`}
          >
            {data.items?.[i]?.content}
          </motion.button>
        ))}
      </div>
      {isComplete && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Grid3X3 className="w-5 h-5" /> {data.items ? "Correct!" : "Grid Complete!"}
        </motion.div>
      )}
    </div>
  );
}

function InteractiveClock({ data }: { data: { targetTime: string } }) {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  const currentTime = `${hour}:${minute.toString().padStart(2, '0')}`;
  const isCorrect = currentTime === data.targetTime;

  return (
    <div className="bg-indigo-50 p-6 rounded-[32px] border-2 border-indigo-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-indigo-800 uppercase tracking-widest text-sm mb-6 text-center">Set the Time to {data.targetTime}</h4>
      
      <div className="relative w-48 h-48 mx-auto mb-8 bg-white rounded-full border-4 border-indigo-200 shadow-lg flex items-center justify-center">
        {/* Clock Face */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute font-black text-indigo-300 text-sm"
            style={{ 
              transform: `rotate(${i * 30}deg) translateY(-80px) rotate(-${i * 30}deg)` 
            }}
          >
            {i === 0 ? 12 : i}
          </div>
        ))}
        
        {/* Hands */}
        <motion.div 
          animate={{ rotate: hour * 30 + (minute / 60) * 30 }}
          className="absolute w-1.5 h-12 bg-indigo-800 rounded-full origin-bottom bottom-1/2"
        />
        <motion.div 
          animate={{ rotate: minute * 6 }}
          className="absolute w-1 h-16 bg-indigo-500 rounded-full origin-bottom bottom-1/2"
        />
        <div className="w-3 h-3 bg-indigo-900 rounded-full z-10" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <button onClick={() => setHour(h => h === 12 ? 1 : h + 1)} className="flex-1 bg-white p-3 rounded-xl border-2 border-indigo-200 font-black text-indigo-600 shadow-sm active:scale-95">Hour+</button>
          <button onClick={() => setMinute(m => (m + 5) % 60)} className="flex-1 bg-white p-3 rounded-xl border-2 border-indigo-200 font-black text-indigo-600 shadow-sm active:scale-95">Min+</button>
        </div>
        <div className="text-center bg-white p-3 rounded-2xl border-2 border-indigo-100 shadow-inner">
          <span className="text-3xl font-black text-indigo-600">{currentTime}</span>
        </div>
      </div>

      {isCorrect && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" /> Perfect Timing!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveMoney({ data }: { data: { target: number; currency: string } }) {
  const [total, setTotal] = useState(0);
  const denominations = [1, 2, 5, 10, 20, 50, 100];

  const isCorrect = total === data.target;

  return (
    <div className="bg-green-50 p-6 rounded-[32px] border-2 border-green-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-green-800 uppercase tracking-widest text-sm mb-4 text-center">Collect {data.target} {data.currency}</h4>
      
      <div className="bg-white p-6 rounded-2xl border-2 border-green-200 shadow-inner mb-6 text-center">
        <span className="text-4xl font-black text-green-600">{total} <small className="text-sm uppercase">{data.currency}</small></span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {denominations.map(val => (
          <button
            key={val}
            onClick={() => setTotal(total + val)}
            className="bg-white p-2 rounded-xl border-2 border-green-100 font-black text-green-700 shadow-sm active:scale-90 text-sm"
          >
            +{val}
          </button>
        ))}
        <button
          onClick={() => setTotal(0)}
          className="bg-red-50 p-2 rounded-xl border-2 border-red-100 font-black text-red-600 shadow-sm active:scale-90 text-sm"
        >
          Clear
        </button>
      </div>

      {isCorrect && (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Banknote className="w-5 h-5" /> Money Master!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveRuler({ data }: { data: { target: number; unit: string; objectWidth: number } }) {
  const [rulerPos, setRulerPos] = useState(0);
  const [measured, setMeasured] = useState(false);

  return (
    <div className="bg-yellow-50 p-6 rounded-[32px] border-2 border-yellow-100 w-full mt-6 shadow-inner overflow-hidden">
      <h4 className="font-black text-yellow-800 uppercase tracking-widest text-sm mb-12 text-center">Measure the Object</h4>
      
      <div className="relative h-32 flex items-center justify-center mb-8">
        {/* Object to measure */}
        <div 
          className="h-12 bg-orange-400 rounded-lg shadow-md border-2 border-orange-500 flex items-center justify-center text-white font-black"
          style={{ width: `${data.objectWidth * 20}px` }}
        >
          ?
        </div>

        {/* Ruler */}
        <motion.div 
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          onDrag={(e, info) => setRulerPos(info.point.x)}
          className="absolute top-16 cursor-grab active:cursor-grabbing"
        >
          <div className="w-64 h-10 bg-yellow-200 rounded-md border-2 border-yellow-400 shadow-lg flex items-end px-2 pb-1 gap-1">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div className={`w-0.5 ${i % 5 === 0 ? 'h-4 bg-yellow-600' : 'h-2 bg-yellow-400'}`} />
                <span className="text-[8px] font-black text-yellow-700">{i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <input 
          type="number" 
          placeholder={`Enter ${data.unit}`}
          className="w-full p-4 rounded-2xl border-2 border-yellow-200 text-center font-black text-xl focus:border-yellow-400 outline-none"
          onChange={(e) => setMeasured(parseInt(e.target.value) === data.target)}
        />
      </div>

      {measured && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Ruler className="w-5 h-5" /> Perfect Measurement!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveSlider({ data }: { data: { min: number; max: number; step?: number; target: number; label?: string } }) {
  const [val, setVal] = useState(data.min);
  const isCorrect = Math.abs(val - data.target) <= (data.max - data.min) * 0.05;

  return (
    <div className="bg-rose-50 p-6 rounded-[32px] border-2 border-rose-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-rose-800 uppercase tracking-widest text-sm mb-6 text-center">{data.label ? `Slide to ${data.label}` : "Slide to Target"}</h4>
      
      <div className="px-4 mb-8">
        <input 
          type="range" 
          min={data.min} 
          max={data.max} 
          step={data.step || 1}
          value={val}
          onChange={(e) => setVal(parseInt(e.target.value))}
          className="w-full h-3 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
        />
        <div className="flex justify-between mt-2 font-black text-rose-400 text-xs">
          <span>{data.min}</span>
          <span>{data.max}</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border-2 border-rose-100 text-center shadow-inner">
        <span className="text-3xl font-black text-rose-600">{val}</span>
      </div>

      {isCorrect && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <SlidersHorizontal className="w-5 h-5" /> Great Estimation!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveDragDrop({ data }: { data: { items: { id: string; text?: string; label?: string; category: string }[]; categories?: string[] } }) {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  
  const isAllCorrect = data.items.every(item => placed[item.id] === item.category);
  const categories = data.categories || [];

  return (
    <div className="bg-violet-50 p-6 rounded-[32px] border-2 border-violet-100 w-full mt-6 shadow-inner">
      <h4 className="font-black text-violet-800 uppercase tracking-widest text-sm mb-6 text-center">Sort the Items!</h4>
      
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {data.items.filter(item => !placed[item.id]).map(item => (
          <motion.div
            key={item.id}
            drag
            dragSnapToOrigin
            onDragEnd={(_, info) => {
              // Simple hit detection logic could go here, but for now we'll use buttons for simplicity in this environment
              // In a real app we'd use a proper DND library or ref-based hit detection
            }}
            className="bg-white p-3 rounded-xl border-2 border-violet-200 shadow-md cursor-grab active:cursor-grabbing font-black text-violet-600"
          >
            {item.text || item.label}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <div key={cat} className="bg-white/50 border-2 border-dashed border-violet-300 rounded-2xl p-4 min-h-[100px]">
            <span className="block text-center text-xs font-black text-violet-400 uppercase mb-2">{cat}</span>
            <div className="flex flex-wrap gap-2">
              {data.items.filter(item => placed[item.id] === cat).map(item => (
                <div key={item.id} className="bg-violet-500 text-white p-2 rounded-lg text-xs font-bold">
                  {item.text || item.label}
                </div>
              ))}
              {/* For this demo environment, let's add buttons to "place" items since full drag-drop hit detection is complex without refs */}
              {data.items.filter(item => !placed[item.id]).map(item => (
                <button 
                  key={item.id + cat}
                  onClick={() => setPlaced({...placed, [item.id]: cat})}
                  className="text-[10px] bg-violet-100 text-violet-400 p-1 rounded border border-violet-200"
                >
                  Put {item.text || item.label} here
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isAllCorrect && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Move className="w-5 h-5" /> All Sorted!
        </motion.div>
      )}
    </div>
  );
}

function InteractiveVenn({ data }: { data: { leftLabel: string; rightLabel: string; items: { text: string; categories: string[] }[] } }) {
  const [placements, setPlacements] = useState<Record<string, string>>({});

  const isAllCorrect = data.items.every(item => {
    const placed = placements[item.text] || "none";
    const cats = item.categories || [];
    const expected = cats.includes("left") && cats.includes("right") ? "both" :
                     cats.includes("left") ? "left" :
                     cats.includes("right") ? "right" : "none";
    return placed === expected;
  });

  return (
    <div className="bg-amber-50 p-6 rounded-[32px] border-2 border-amber-100 w-full mt-6 shadow-inner overflow-hidden">
      <h4 className="font-black text-amber-800 uppercase tracking-widest text-sm mb-4 text-center">Venn Diagram Sort</h4>
      
      <div className="relative h-48 mb-6">
        <div className="absolute left-0 w-32 h-32 bg-blue-200/50 rounded-full border-2 border-blue-400 flex items-start justify-center pt-4">
          <span className="text-[10px] font-black text-blue-600">{data.leftLabel}</span>
        </div>
        <div className="absolute right-0 w-32 h-32 bg-red-200/50 rounded-full border-2 border-red-400 flex items-start justify-center pt-4">
          <span className="text-[10px] font-black text-red-600">{data.rightLabel}</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-32 flex items-center justify-center text-[10px] font-black text-purple-600">
          Both
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {data.items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              // Cycle through placements: None -> Left -> Right -> Both
              const current = placements[item.text] || "none";
              const next = current === "none" ? "left" : current === "left" ? "right" : current === "right" ? "both" : "none";
              setPlacements({...placements, [item.text]: next});
            }}
            className={`p-2 rounded-xl border-2 font-bold text-xs transition-all ${
              placements[item.text] === "left" ? "bg-blue-500 border-blue-600 text-white" :
              placements[item.text] === "right" ? "bg-red-500 border-red-600 text-white" :
              placements[item.text] === "both" ? "bg-purple-500 border-purple-600 text-white" :
              "bg-white border-amber-200 text-amber-700"
            }`}
          >
            {item.text}
          </button>
        ))}
      </div>

      {isAllCorrect ? (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4 text-center text-green-600 font-black flex items-center justify-center gap-2">
          <Move className="w-5 h-5" /> All Sorted!
        </motion.div>
      ) : (
        <p className="mt-4 text-center text-amber-600 text-[10px] font-black italic">Tap items to move them into the circles!</p>
      )}
    </div>
  );
}

// --- Main Page ---

export function LearningCenter() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const topic = courseData.find((t) => t.id === topicId);
  const learnLesson = topic?.lessons.find((l) => l.type === "learn");
  const slides = learnLesson?.slides || [];

  const slide = slides[currentSlide];

  const handleReadAloud = () => {
    if (slide) {
      audioService.speak(`${slide.title}. ${slide.content}`);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate(`/topic/${topicId}`);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const animations = {
    bounce: {
      initial: { scale: 0.8, opacity: 0, y: 50 },
      animate: { scale: 1, opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    slide: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    zoom: {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { duration: 0.5 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8 }
    }
  };

  const currentAnim = animations[slide.animation || "slide"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Refined Header with Mascot and Read Aloud */}
      <header className="bg-white px-4 py-4 flex items-center shadow-sm sticky top-0 z-10">
        <button
          onClick={() => navigate(`/topic/${topicId}`)}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 mx-4">
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
            <div
              className={`h-full ${topic.color} transition-all duration-700 ease-out relative`}
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
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
          {currentSlide + 1}/{slides.length}
        </div>
      </header>

      {/* Slide Content */}
      <div className="flex-1 relative flex flex-col items-center justify-center p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={currentAnim.initial}
            animate={currentAnim.animate}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={currentAnim.transition}
            className="w-full max-w-md flex flex-col items-center"
          >
            {slide.image && !slide.interactive && (
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-blue-400 rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform -z-10" />
                <div className="absolute inset-0 bg-yellow-400 rounded-[40px] -rotate-3 group-hover:-rotate-6 transition-transform -z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded-[40px] shadow-2xl border-4 border-white"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-2xl shadow-lg border-2 border-white"
                >
                  <Star className="w-6 h-6 text-white fill-white" />
                </motion.div>
              </div>
            )}

            <h1 className="text-3xl font-black text-gray-800 text-center mb-4 leading-tight">
              {slide.title}
            </h1>
            <p className="text-xl text-gray-600 font-bold text-center leading-relaxed mb-8">
              {slide.content}
            </p>

            {/* Interactive Section */}
            {slide.interactive?.type === "counter" && (
              <InteractiveCounter data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "matcher" && (
              <InteractiveMatcher data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "sorter" && (
              (slide.interactive.data?.categories || (slide.interactive as any).categories) ? (
                <InteractiveDragDrop data={slide.interactive.data || slide.interactive} />
              ) : (
                <InteractiveSorter data={slide.interactive.data || slide.interactive} />
              )
            )}
            {slide.interactive?.type === "numberline" && (
              <InteractiveNumberLine data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "choice" && (
              <InteractiveChoice data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "pattern" && (
              <InteractivePattern data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "balance" && (
              <InteractiveBalance data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "grid" && (
              <InteractiveGrid data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "clock" && (
              <InteractiveClock data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "money" && (
              <InteractiveMoney data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "ruler" && (
              <InteractiveRuler data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "slider" && (
              <InteractiveSlider data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "drag-drop" && (
              <InteractiveDragDrop data={slide.interactive.data || slide.interactive} />
            )}
            {slide.interactive?.type === "venn" && (
              <InteractiveVenn data={slide.interactive.data || slide.interactive} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="p-8 pb-14 flex items-center justify-between max-w-md mx-auto w-full bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-2xl transition-all ${
            currentSlide === 0 ? "bg-gray-100 text-gray-300" : "bg-blue-100 text-blue-500 hover:bg-blue-200 active:scale-90"
          }`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="flex-1 mx-4 bg-blue-500 text-white p-5 rounded-3xl font-black text-xl shadow-xl hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {currentSlide === slides.length - 1 ? (
            <>Finish <Sparkles className="w-6 h-6" /></>
          ) : (
            <>Next <ChevronRight className="w-6 h-6" /></>
          )}
        </button>
      </div>

      {/* Background Decorations */}
      <div className="fixed top-20 left-10 -z-10 opacity-10 pointer-events-none">
        <Sparkles className="w-20 h-20 text-blue-500" />
      </div>
      <div className="fixed bottom-20 right-10 -z-10 opacity-10 pointer-events-none">
        <Star className="w-24 h-24 text-yellow-500 fill-yellow-500" />
      </div>
    </div>
  );
}
