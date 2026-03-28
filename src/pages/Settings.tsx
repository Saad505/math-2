import React, { useState, useEffect, useRef } from "react";
import { User, Bell, Shield, LogOut, RotateCcw, Camera, Check } from "lucide-react";
import { resetProgress } from "@/lib/progress";
import { getProfile, saveProfile, UserProfile } from "@/lib/profile";
import { motion, AnimatePresence } from "motion/react";

export function Settings() {
  const [profile, setProfile] = useState<UserProfile>(getProfile());
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(profile.name);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone!")) {
      resetProgress();
      window.location.reload();
    }
  };

  const handleSaveProfile = () => {
    const newProfile = { ...profile, name: tempName };
    saveProfile(newProfile);
    setProfile(newProfile);
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const newProfile = { ...profile, avatar: base64String };
        saveProfile(newProfile);
        setProfile(newProfile);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 px-4 pt-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight mb-8">Settings</h1>

        <div className="bg-white rounded-[40px] shadow-xl border-2 border-blue-50 overflow-hidden mb-8">
          <div className="p-8 flex flex-col items-center border-b border-gray-100 bg-gradient-to-b from-blue-50 to-white">
            <div className="relative mb-6">
              <div className="w-28 h-28 bg-blue-100 rounded-[32px] flex items-center justify-center overflow-hidden shadow-inner border-4 border-white">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-14 h-14 text-blue-500" />
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute -bottom-2 -right-2 bg-blue-500 p-3 rounded-2xl text-white shadow-lg border-4 border-white hover:bg-blue-600 active:scale-90 transition-all"
              >
                <Camera className="w-5 h-5" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />
            </div>

            {isEditing ? (
              <div className="flex flex-col items-center w-full">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full text-center text-2xl font-black text-gray-800 bg-gray-50 border-2 border-blue-200 rounded-2xl p-3 mb-3 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                <button
                  onClick={handleSaveProfile}
                  className="bg-green-500 text-white px-8 py-2 rounded-xl font-black shadow-lg hover:bg-green-600 flex items-center gap-2"
                >
                  <Check className="w-5 h-5" /> Save Name
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-black text-gray-800 mb-1">
                  {profile.name || "Little Explorer"}
                </h2>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-blue-500 font-black text-sm hover:underline"
                >
                  Edit Name
                </button>
                <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-xs">Standard 2</p>
              </div>
            )}
          </div>

          <div className="p-6 space-y-3">
            <button className="w-full flex items-center justify-between p-5 rounded-3xl hover:bg-gray-50 transition-all active:scale-[0.98] group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6 text-purple-500" />
                </div>
                <span className="font-black text-gray-700 text-lg">Notifications</span>
              </div>
              <div className="w-14 h-8 bg-green-400 rounded-full flex items-center px-1.5">
                <div className="w-5 h-5 bg-white rounded-full translate-x-6 shadow-sm" />
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-5 rounded-3xl hover:bg-gray-50 transition-all active:scale-[0.98] group">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="font-black text-gray-700 text-lg">Parental Controls</span>
              </div>
            </button>

            <button 
              onClick={handleReset}
              className="w-full flex items-center justify-between p-5 rounded-3xl hover:bg-orange-50 transition-all active:scale-[0.98] group text-orange-600"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <span className="font-black text-lg">Reset Progress</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-5 rounded-3xl hover:bg-red-50 transition-all active:scale-[0.98] group text-red-500">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <LogOut className="w-6 h-6" />
                </div>
                <span className="font-black text-lg">Log Out</span>
              </div>
            </button>
          </div>
        </div>
        
        <div className="text-center text-gray-400 font-black text-sm pb-8">
          <p>Math Adventure v1.0</p>
          <p>Made with ❤️ for kids</p>
        </div>
      </div>
    </div>
  );
}
