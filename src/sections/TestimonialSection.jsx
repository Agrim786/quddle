import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cards } from "../constants";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";

const TestimonialSection = () => {
  const isSwipe = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const carouselRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    /* ---------------------- DESKTOP (UNCHANGED) ---------------------- */
    mm.add("(min-width: 1025px)", () => {
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
  }, [isSwipe]);

  // Optimized infinite carousel with Cleanup and Snap logic
  useEffect(() => {
    if (!isSwipe || !carouselRef.current) return;

    const track = carouselRef.current;
    
    // 1. CLEANUP: Remove any existing clones from previous renders to prevent duplicates
    const existingClones = track.querySelectorAll('[data-clone="true"]');
    existingClones.forEach(clone => clone.remove());

    // 2. SETUP: Get fresh list of original items
    let originalItems = Array.from(track.children);
    if (originalItems.length === 0) return;

    // 3. CLONING: Create strictly one clone at start and one at end
    const firstClone = originalItems[0].cloneNode(true);
    const lastClone = originalItems[originalItems.length - 1].cloneNode(true);

    // Mark them so we can remove them easily later
    firstClone.setAttribute('data-clone', 'true');
    lastClone.setAttribute('data-clone', 'true');

    track.insertBefore(lastClone, originalItems[0]); // Add LastClone to start
    track.appendChild(firstClone);                   // Add FirstClone to end

    // Update items array to include new clones
    // Structure is now: [LastClone, 1, 2, 3, 4, 5, 6, FirstClone]
    let allItems = Array.from(track.children);

    const cardWidth = allItems[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const fullItemWidth = cardWidth + gap;

    // We start at index 1 (which is Real Card #1) because index 0 is LastClone
    let index = 1;
    
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTime = 0;
    let velocityX = 0;

    const updateCenterCard = () => {
      allItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('center');
        } else {
          item.classList.remove('center');
        }
      });
    };

    const setPosition = (animate = true) => {
      // Calculate offset to center the current index
      const offset = -index * fullItemWidth + (track.parentElement.offsetWidth - cardWidth) / 2;

      if (animate) {
        track.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      } else {
        track.style.transition = "none";
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      updateCenterCard();
    };

    // Initialize position
    setPosition(false);

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

    const handleStart = (e) => {
      isDragging = true;
      startX = getX(e);
      currentX = 0;
      startTime = Date.now();
      velocityX = 0;
      track.style.transition = "none";
    };

    const handleMove = (e) => {
      if (!isDragging) return;
      // e.preventDefault(); // Optional: Uncomment if horizontal scroll interferes with vertical

      const x = getX(e);
      const diff = x - startX;
      currentX = diff;

      const time = Date.now();
      // prevent division by zero
      const dt = Math.max(1, time - startTime); 
      velocityX = diff / dt;

      // Live drag movement
      const offset = -index * fullItemWidth + (track.parentElement.offsetWidth - cardWidth) / 2 + currentX;
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      const swipeThreshold = 0.5; 
      const movedEnough = Math.abs(currentX) > cardWidth * 0.2;
      const fastEnough = Math.abs(velocityX) > swipeThreshold;

      if (movedEnough || fastEnough) {
        if (currentX < 0) {
          index++; // Next
        } else {
          index--; // Prev
        }
      }

      setPosition(true);

      currentX = 0;
    };

    const handleTransitionEnd = () => {
      // INFINITE LOOP LOGIC
      // If we are at the very end (FirstClone), snap instantly to Real First
      if (index >= allItems.length - 1) {
        index = 1; 
        setPosition(false); // No animation for the snap
      } 
      // If we are at the very start (LastClone), snap instantly to Real Last
      else if (index <= 0) {
        index = allItems.length - 2;
        setPosition(false);
      }
    };

    track.addEventListener("touchstart", handleStart, { passive: true });
    track.addEventListener("touchmove", handleMove, { passive: false });
    track.addEventListener("touchend", handleEnd, { passive: true });
    track.addEventListener("transitionend", handleTransitionEnd);

    // Handle window resize
    const handleResize = () => {
       // Re-calculate sizes on resize
       setPosition(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // CLEANUP FUNCTION
      track.removeEventListener("touchstart", handleStart);
      track.removeEventListener("touchmove", handleMove);
      track.removeEventListener("touchend", handleEnd);
      track.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", handleResize);
      
      // Remove clones on unmount so they don't pile up
      const clones = track.querySelectorAll('[data-clone="true"]');
      clones.forEach(clone => clone.remove());
      track.style.transform = "none";
    };
  }, [isSwipe]);

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[7vw]">
        <h1 className="text-white first-title">Shop</h1>
        <h1 className="text-[#dd8f2fff] sec-title">Smarter</h1>
      </div>

      {isSwipe ? (
        <div className="carousel-container">
          <div className="carousel-track flex gap-4" ref={carouselRef}>
            {/* Add flex and gap classes if not present in your global CSS */}
            {cards.map((card, index) => (
              <div key={`original-${index}`} className="carousel-card min-w-[60vw] sm:min-w-[40vw]">
                {/* Adjust min-width as per your design requirements */}
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
        </div>
      ) : (
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
      )}
    </section>
  );
};

export default TestimonialSection;