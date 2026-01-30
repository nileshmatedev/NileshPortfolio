import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Plasma from "./components/Plasma";
import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

// Lazy load ProjectDetail component
const ProjectDetail = lazy(() => import("./components/ProjectDetail").then(module => ({ default: module.ProjectDetail })));

function HomePage() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Plasma Background - Fixed position covering entire viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Plasma
          color="#14b8a6"
          speed={0.2}
          direction="forward"
          scale={1.5}
          opacity={0.2}
          mouseInteractive={false}
        />
      </div>

      {/* Main Content - Above plasma background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Intro />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <About />
        <Contact />
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

function ProjectPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  // Extract project ID from URL
  const projectId = window.location.pathname.split("/").pop() || "";

  return (
    <div className="min-h-screen bg-black relative">
      {/* Plasma Background - Fixed position covering entire viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Plasma
          color="#14b8a6"
          speed={0.2}
          direction="forward"
          scale={1.5}
          opacity={0.2}
          mouseInteractive={false}
        />
      </div>

      {/* Project Detail Content */}
      <div className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white text-xl">Loading project...</div>
          </div>
        }>
          <ProjectDetail projectId={projectId} onBack={handleBackToHome} />
        </Suspense>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
      <Analytics />
    </>
  );
}