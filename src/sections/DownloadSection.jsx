"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ai-avatar-section",
      start: "top top",
      end: "+=180%",
      scrub: 1,
      pin: true,
    },
  });

  // PARALLAX FLOAT
  tl.fromTo(".avatar-img",
    { y: 80, scale: 1.12, opacity: 0 },
    { y: 0, scale: 1, opacity: 1, ease: "power3.out", duration: 1.5 }
  );

  // TEXT REVEAL (smooth stagger)
  tl.from(".avatar-title span", {
    y: 60,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
    duration: 1.2,
  }, "-=1");

  // SUBTITLE
  tl.from(".avatar-subtitle", {
    opacity: 0,
    y: 40,
    ease: "power2.out",
    duration: 1,
  }, "-=0.8");

  // QR Code
  tl.from(".qr-wrapper", {
    opacity: 0,
    y: 50,
    scale: 0.92,
    ease: "power3.out",
    duration: 1,
  }, "-=0.8");
});


  return (
    <section className="ai-avatar-section">
      <div className="avatar-wrapper">

        <div className="avatar-left">
          <img
            src="/images/lady2.png"
            alt="AI Avatar Lady"
            className="avatar-img"
          />
        </div>

        <div className="avatar-right">

          <h1 className="avatar-title move-up">
            <span>All</span>{" "}
            <span>These</span>{" "}
            <span>Things</span><br />
            <span>In</span>{" "}
            <span>One</span>{" "}
            <span>App.</span>
          </h1>

          <p className="avatar-subtitle move-up">
            Stream, Shop, Save, Earn — everything built into a single powerful AI-driven experience.
          </p>

          {/* QR CODE BOX */}
          <div className="qr-wrapper">
            <div className="qr-box">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://google.com" className="qr-img" />
            </div>
            <p className="qr-text">Scan to Download</p>
          </div>
        </div>
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30 hidden md:flex">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
      </div>
    </section>
  );
}
