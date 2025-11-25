import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ".mouse-scroll",
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4" // slightly earlier for smoother vibe
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });


  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {(isMobile || isTablet) && (
              <img
                src="/images/bg-image.jpg"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />

            )}
          </>
        ) : (
          <video
            src="/videos/hero1.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            {/* <h1 className="hero-title">THE AI APP</h1> */}
          </div>
          {/* <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Quddle.AI </h1>
            </div>
          </div> */}

          {/* <h2>
            Discover more, spend smarter, and turn everyday shopping into something extraordinary, only on Quddle.ai.
          </h2> */}
        </div>
        <div className="mouse-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
