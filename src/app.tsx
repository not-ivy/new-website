import { Route, Router } from "wouter";
import KnowledgeSection from "./pages/KnowledgeSection";
import HomeSection from "./pages/HomeSection";
import Navbar from "./ui/Navbar";
import ProjectsSection from "./pages/ProjectsSection";
import SocialsSection from "./pages/SocialSection";
import WikiPageSection from "./pages/WikiPageSection";
import WikiIndexSection from "./pages/WikiIndexSection";
import Controls from "./ui/Controls";
import { useState } from "preact/hooks";

export function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <main className="p-10 mx-auto max-w-screen-sm font-sans">
      <Controls collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navbar collapsed={collapsed} />
      <hr className="my-8 border-2 dark:border-palette-white border-palette-black" />
      <Router>
        <Route path="/" component={HomeSection} />
        <Route path="/knowledge" component={KnowledgeSection} />
        <Route path="/projects" component={ProjectsSection} />
        <Route path="/socials" component={SocialsSection} />
        <Route path="/wiki/:page" component={WikiPageSection} />
        <Route path="/wiki" component={WikiIndexSection} />
      </Router>
    </main>
  )
}
