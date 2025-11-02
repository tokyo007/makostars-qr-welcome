import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AppsHub from "./pages/AppsHub";
import NotFound from "./pages/NotFound";
import Bookmark from "./pages/Bookmark";
import BookFair2025 from "./pages/BookFair2025";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppsHub />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/book-fair-2025" element={<BookFair2025 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Index />} />
          <Route path="/apps" element={<AppsHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

<Routes>
  <Route path="/" element={<AppsHub />} />
  <Route path="/bookmark" element={<Bookmark />} />
  <Route path="/book-fair-2025" element={<BookFair2025 />} />
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>;
