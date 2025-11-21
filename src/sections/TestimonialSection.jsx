import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cards } from "../constants";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    /* ---------------------- DESKTOP (UNCHANGED) ---------------------- */
    mm.add("(min-width: 769px)", () => {
      const updateMargin = () => {
        const section = document.querySelector(".testimonials-section");
        if (!section) return;
        const h = section.offsetHeight;
        gsap.set(section, { marginTop: -h * 1.1 });
      };

      updateMargin();
      ScrollTrigger.addEventListener("refreshInit", updateMargin);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: true,
        },
      });

      tl.to(".testimonials-section .first-title", { xPercent: 70 })
        .to(".testimonials-section .sec-title", { xPercent: 25 }, "<")
        .to(".testimonials-section .third-title", { xPercent: -50 }, "<");

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    });

    /* ---------------------- MOBILE FIXED & PERFECT ---------------------- */
    mm.add("(max-width: 768px)", () => {
      const section = document.querySelector(".testimonials-section");

      // Reset section for mobile layout
      if (section) {
        gsap.set(section, { marginTop: 0, height: "100vh" });
      }

      // Hide titles fully on mobile
      gsap.set([".first-title", ".sec-title"], { display: "none" });


      // Clear any tailwind transforms from translation/rotation classes
      gsap.set(".vd-card", { clearProps: "transform" });

      // Prepare card defaults for stacking
      gsap.set(".vd-card", {
        position: "absolute",
        left: "50%",
        xPercent: -50,
        width: "80%",
        opacity: 0,
        yPercent: 120,
        scale: 0.88,
        marginLeft: 0,
      });

      const allCards = gsap.utils.toArray(".vd-card");

      // Mobile stacked smooth timeline
      const mobileTl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top top",
          end: "+=300%",
          scrub: true,      // ← direct tie to scroll, no lag, no bounce
          pin: true,
          anticipatePin: 1,
        },
      });

      // One-by-one stacking with clean vertical offsets
      allCards.forEach((card, i) => {

        // Set zIndex BEFORE movement so card is ALWAYS above previous
        gsap.set(card, { zIndex: 100 + i });

        mobileTl.fromTo(
          card,
          {
            opacity: 0,
            yPercent: 120,      // ALWAYS from bottom
            scale: 0.9,
          },
          {
            opacity: 1,
            yPercent: -25,      // final overlapping position
            scale: 1,
            duration: 0.7,

          },
          i * 0.45
        );
      });
      ScrollTrigger.refresh();

    });
  });

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[7vw]">
        <h1 className="text-white first-title">Shop</h1>
        <h1 className="text-[#dd8f2fff] sec-title">Smarter</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation || ""} ${card.rotation || ""
              }`}
          >
            <div className="aspect-[9/16] w-full h-auto overflow-hidden">
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-full object-cover rounded-[2vw]"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
