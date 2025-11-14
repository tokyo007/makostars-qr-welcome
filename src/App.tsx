import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppsHub from "./pages/AppsHub";
import Bookmark from "./pages/Bookmark";
import BookFair2025 from "./pages/BookFair2025";
import NotFound from "./pages/NotFound";
import { RouteTracker } from "@/components/RouteTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <Routes>
          <Route path="/" element={<AppsHub />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/book-fair-2025" element={<BookFair2025 />} />
          {/* Optional: send unknown routes back to hub */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
