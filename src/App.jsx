import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import { useGSAP } from "@gsap/react";
import DownloadSection from "./sections/DownloadSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
import Cookies from "./pages/Cookies";

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
      {/* GLOBAL SMOOTH WRAPPER */}
      <div id="smooth-wrapper">
        <div id="smooth-content">

          <main>
            <NavBar />

            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <MessageSection />
                    <DownloadSection />
                    <BenefitSection />
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
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
};

export default App;
