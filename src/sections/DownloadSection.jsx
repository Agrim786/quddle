"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  useGSAP(() => {
    // IMAGE
    gsap.from(".avatar-img", {
      opacity: 0,
      y: 80,
      scale: 1.12,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ai-avatar-section",
        start: "top 95%",
      },
    });

    // TITLE WORDS
    gsap.from(".avatar-title span", {
      opacity: 0,
      y: 35,
      stagger: 0.06,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".avatar-title",
        start: "top bottom",
        // markers: true,
      },
    });

    // SUBTITLE
    gsap.from(".avatar-subtitle", {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".avatar-subtitle",
        start: "top bottom",
      },
    });

    // QR BOX
    gsap.from(".qr-wrapper", {
      opacity: 0,
      y: 25,
      scale: 0.97,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".qr-wrapper",
        start: "top bottom",
      },
    });
  });

  return (
    <section className="ai-avatar-section">
      <div className="avatar-wrapper">

        {/* LEFT IMAGE */}
        <div className="avatar-left">
          <img
            src="/images/lady2.png"
            alt="AI Avatar Lady"
            className="avatar-img"
          />
        </div>

        {/* RIGHT TEXT */}
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
            Stream, Shop, Save, Earn — everything built into a single powerful
            AI-driven experience.
          </p>

          <div className="qr-wrapper">
            <div className="qr-box">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://google.com"
                className="qr-img"
              />
            </div>
            <p className="qr-text">Scan to Download</p>
          </div>
        </div>

        {/* MOUSE */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30 hidden md:flex">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}
