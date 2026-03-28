import { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-5 py-2.5 rounded-full shadow-lg flex items-center z-50 text-sm font-bold animate-in slide-in-from-top-5 fade-in duration-300">
      <WifiOff className="w-4 h-4 mr-2" />
      You are offline. Playing from cache.
    </div>
  );
}
