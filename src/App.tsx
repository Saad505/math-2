import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { TopicView } from "@/pages/TopicView";
import { LessonView } from "@/pages/LessonView";
import { LearningCenter } from "@/pages/LearningCenter";
import { Progress } from "@/pages/Progress";
import { Settings } from "@/pages/Settings";
import { CertificateView } from "@/pages/CertificateView";
import { Navigation } from "@/components/Navigation";
import { InstallPrompt } from "@/components/InstallPrompt";
import { NetworkStatus } from "@/components/NetworkStatus";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 antialiased selection:bg-primary/30">
        <NetworkStatus />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicView />} />
          <Route path="/topic/:topicId/learn" element={<LearningCenter />} />
          <Route path="/topic/:topicId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/certificate" element={<CertificateView />} />
        </Routes>
        <Navigation />
        <InstallPrompt />
      </div>
    </Router>
  );
}
