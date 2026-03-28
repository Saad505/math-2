import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Star, Printer, ChevronLeft, Download } from 'lucide-react';
import { getProfile } from '@/lib/profile';
import { getProgress } from '@/lib/progress';
import { MathBuddy } from '@/components/MathBuddy';

export function CertificateView() {
  const navigate = useNavigate();
  const profile = getProfile();
  const progress = getProgress();
  const [date] = useState(new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex flex-col items-center">
      {/* Back Button (Hidden on Print) */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8 print:hidden">
        <button
          onClick={() => navigate('/progress')}
          className="flex items-center gap-2 text-gray-600 font-bold hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Progress
        </button>
        <button
          onClick={handlePrint}
          className="bg-primary text-white px-6 py-3 rounded-2xl font-black shadow-lg hover:bg-primary/90 flex items-center gap-2 active:scale-95 transition-all"
        >
          <Printer className="w-5 h-5" /> Print Certificate
        </button>
      </div>

      {/* Certificate Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl bg-white aspect-[1.414/1] shadow-2xl rounded-sm border-[16px] border-double border-blue-600 p-12 flex flex-col items-center text-center relative overflow-hidden print:shadow-none print:border-blue-900 print:m-0"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

        {/* Header */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Award className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-5xl font-black text-blue-900 uppercase tracking-tighter mb-2">Certificate of Achievement</h1>
          <div className="w-32 h-1 bg-yellow-400 rounded-full" />
        </div>

        {/* Name Area */}
        <div className="flex flex-col items-center flex-1 justify-center relative z-10">
          <p className="text-xl text-gray-500 font-bold mb-4 uppercase tracking-[0.2em]">This is proudly presented to</p>
          <h2 className="text-6xl font-black text-gray-800 mb-6 italic underline decoration-blue-200 decoration-8 underline-offset-8">
            {profile.name || "Brilliant Student"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            For successfully completing the <span className="text-blue-600 font-black">Math C2 Adventure</span>. 
            You've mastered numbers, addition, and patterns with a total of <span className="text-yellow-500 font-black">{progress.stars} Stars</span>!
          </p>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-between items-end mt-8 relative z-10">
          <div className="text-left">
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Date Completed</p>
            <p className="text-xl font-black text-gray-800">{date}</p>
          </div>

          <div className="flex flex-col items-center">
            <MathBuddy state="happy" size={100} className="mb-2" />
            <p className="text-blue-600 font-black italic">Math Buddy Approved!</p>
          </div>

          <div className="text-right">
            <div className="flex justify-end gap-1 mb-1">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Official Award</p>
          </div>
        </div>

        {/* Corner Decorations */}
        <Award className="absolute -top-4 -left-4 w-12 h-12 text-blue-200 opacity-20 rotate-12" />
        <Award className="absolute -bottom-4 -right-4 w-12 h-12 text-blue-200 opacity-20 -rotate-12" />
      </motion.div>

      {/* CSS for print optimization */}
      <style>{`
        @media print {
          body {
            background: white !important;
            margin: 0;
            padding: 0;
          }
          .min-h-screen {
            padding: 0 !important;
            background: white !important;
          }
          button {
            display: none !important;
          }
          .aspect-[1.414/1] {
            box-shadow: none !important;
            width: 100% !important;
            height: auto !important;
            margin: 0 !important;
            border-width: 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
