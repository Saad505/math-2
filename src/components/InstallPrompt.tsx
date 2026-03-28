import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Only show if they haven't dismissed it recently
      const hasDismissed = localStorage.getItem('pwa-prompt-dismissed');
      if (!hasDismissed) {
        setShowPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    window.addEventListener('appinstalled', () => {
      setShowPrompt(false);
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowPrompt(false);
    }
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-3xl shadow-2xl p-4 z-50 border-2 border-blue-100 flex items-start gap-4"
        >
          <div className="bg-blue-100 p-3 rounded-2xl">
            <Download className="w-6 h-6 text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800 text-lg leading-tight">Install Math Kids</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">Install our app for easy access and offline play!</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={handleInstall}
                className="flex-1 bg-blue-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm active:scale-95"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2.5 rounded-xl font-bold text-sm text-gray-500 hover:bg-gray-100 transition-colors active:scale-95"
              >
                Later
              </button>
            </div>
          </div>
          <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600 p-1">
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
