import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [legalOpen, setLegalOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const legalMenuRef = useRef(null);
  const legalBtnRef = useRef(null);
  const langMenuRef = useRef(null);

  // ✅ CLOSE WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      // If main menu is OPEN and click is outside → close it
      if (
        legalOpen &&
        legalMenuRef.current &&
        !legalMenuRef.current.contains(e.target) &&
        !legalBtnRef.current.contains(e.target)
      ) {
        setLegalOpen(false);
        setLangOpen(false); // also close language submenu
      }

      // If language menu is OPEN and click outside → close it
      if (
        langOpen &&
        langMenuRef.current &&
        !langMenuRef.current.contains(e.target)
      ) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [legalOpen, langOpen]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between md:p-9 p-3">

      {/* Logo */}
      <img src="/images/logo2.gif" alt="nav-logo" className="md:w-16 w-12" />

      {/* DROPDOWN */}
      <div className="relative">
        <button
          aria-expanded={legalOpen}
          aria-controls="legal-menu"
          ref={legalBtnRef}
          onClick={() => setLegalOpen((p) => !p)}
          className="transition-colors duration-300 p-2 text-white"
        >
          <Menu className="w-7 h-7" />
        </button>

        {/* MAIN MENU */}
        <div
          id="legal-menu"
          ref={legalMenuRef}
          className={`absolute right-0 top-full mt-2 w-52 bg-[#FFFDD0] text-black rounded-2xl shadow-xl z-50 transform transition-all duration-300 origin-top ${
            legalOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="py-2">

            {/* Normal buttons */}
            {[
              "Blogs",
              "About Us",
              "Advertising",
              "Careers",
              "Policy",
              "Data Room",
              "Manage Cookies",
            ].map((item) => (
              <button
                key={item}
                className="w-full px-4 py-2 text-left text-base hover:bg-white/10 transition-colors font-serif"
              >
                {item}
              </button>
            ))}

            {/* LANGUAGE OPTION */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((p) => !p)}
                className="w-full px-4 py-2 text-left text-base hover:bg-white/10 transition-colors font-serif flex justify-between"
              >
                Language <span className="opacity-70 text-xs">▶</span>
              </button>

              {/* LANGUAGE SUBMENU */}
              <div
                ref={langMenuRef}
                className={`absolute top-0 right-full mr-2 w-40 bg-[#FFFDD0] rounded-xl shadow-xl transition-all duration-300 origin-left ${
                  langOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {["English", "Hindi", "Spanish", "French"].map((lang) => (
                    <button
                      key={lang}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-white/10 font-serif text-black"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
