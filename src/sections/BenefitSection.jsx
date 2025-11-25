import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPinSection from "../components/VideoPinSection";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const BenefitSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });


  useGSAP(() => {
    /* ------------------- MOBILE: INSTANT REVEAL ------------------- */
    if (isMobile) {
      gsap.to(".benefit-section .first-title", {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "circ.out",
      });

      gsap.to(".benefit-section .second-title", {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.6,
        delay: 0.15,
        ease: "circ.out",
      });

      gsap.to(".benefit-section .third-title", {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.6,
        delay: 0.3,
        ease: "circ.out",
      });

      gsap.to(".benefit-section .fourth-title", {
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.6,
        delay: 0.45,
        ease: "circ.out",
      });

      return; // STOP here (avoid ScrollTrigger on mobile)
    }

    /* ------------------- DESKTOP: SCROLL REVEAL ------------------- */
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Experience <br />
            Explore Why Thousands Choose
          </p>

          <div className="mt-25 col-center">
            <ClipPathTitle
              title={"Smart Shopping"}
              color={"#faeade"}
              bg={"#dd8f2fff"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Deals + Streaming"}
              color={"#f7f3faff"}
              bg={"#362e38ff"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Instant Rewards"}
              color={"#faeade"}
              bg={"#773fbbff"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Friction Free"}
              color={"#ffffffff"}
              bg={"#8fa34bff"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div>{!(isMobile || isTablet) && <VideoPinSection />}</div>
    </section>
  );
};

export default BenefitSection;
