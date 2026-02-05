import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "@/components/Layout";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";
import BudgetPlans from "./pages/BudgetPlans";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:slug" element={<DestinationDetail />} />
        <Route path="/budget-plans" element={<BudgetPlans />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
