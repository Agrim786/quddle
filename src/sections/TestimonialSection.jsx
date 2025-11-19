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

    mm.add("(max-width: 768px)", () => {
      const section = document.querySelector(".testimonials-section");
      if (section) {
        gsap.set(section, { marginTop: 0, height: "auto" });
      }

      gsap.set(".pin-box", {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        height: "auto",
        marginTop: "10vh",
        bottom: "auto"
      });

      gsap.set(".vd-card", {
        transform: "none",
        margin: "20px 0",
        width: "70%",
        position: "relative",
        left: "auto",
        top: "auto"
      });
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
            className={`vd-card ${card.translation || ""} ${card.rotation || ""}`}
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
