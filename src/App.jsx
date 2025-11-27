import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import { useGSAP } from "@gsap/react";
import DownloadSection from "./sections/DownloadSection";
import BarsSection from "./sections/BarsSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";
import DataRoom from "./pages/DataRoom";




gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <Router>
      <NavBar />
      {/* GLOBAL SMOOTH WRAPPER */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>

            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <MessageSection />
                    <DownloadSection />
                    <BarsSection />
                    <TestimonialSection />
                    <FooterSection />
                  </>
                }
              />

              {/* Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/data-room" element={<DataRoom />} />
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
};

export default App;
