import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ThemeProvider } from "./components/weather/ThemeProvider";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail";
import { MoodExplorer } from "./pages/MoodExplorer";
import { ItineraryGenerator } from "./pages/ItineraryGenerator";
import { SavedTrips } from "./pages/SavedTrips";
import { VirtualTour } from "./pages/VirtualTour";
import { Profile } from "./pages/Profile";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/mood" element={<MoodExplorer />} />
          <Route path="/itinerary" element={<ItineraryGenerator />} />
          <Route path="/saved" element={<SavedTrips />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
