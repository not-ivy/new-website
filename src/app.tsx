import { Route, Router } from "wouter";
import KnowledgeSection from "./pages/KnowledgeSection";
import HomeSection from "./pages/HomeSection";
import Navbar from "./ui/Navbar";
import ProjectsSection from "./pages/ProjectsSection";

export function App() {
  return (
    <main className="p-4 font-sans">
      <Navbar />
      <hr className="my-8 w-screen-sm mx-auto border-2 dark:border-palette-white border-palette-black" />
      <Router>
        <Route path="/" component={HomeSection} />
        <Route path="/knowledge" component={KnowledgeSection} />
        <Route path="/projects" component={ProjectsSection} />
      </Router>
    </main>
  )
}
