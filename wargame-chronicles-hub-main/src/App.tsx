
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorldOfTanks from "./pages/WorldOfTanks";
import WorldOfTanksBlitz from "./pages/WorldOfTanksBlitz";
import ProjectColdWar from "./pages/ProjectColdWar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/world-of-tanks" element={<WorldOfTanks />} />
          <Route path="/world-of-tanks-blitz" element={<WorldOfTanksBlitz />} />
          <Route path="/project-cold-war" element={<ProjectColdWar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
