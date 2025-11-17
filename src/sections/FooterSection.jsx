import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <footer className="w-full bg-[#000000] text-white py-12 px-6 md:px-20">

      {/* MAIN FLEX — LEFT | LINE | RIGHT */}
      <div className="flex items-center justify-between w-full gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-1 shrink-0">
          <img
            src="/images/logo2.gif"
            alt="ONCE MORE"
            className="w-26 md:w-34"
          />
          <p className="text-sm text-white/70">
            An one stop AI-Shopping App
          </p>
        </div>

        {/* CENTER LINE */}
        <div className="flex-1 px-6">
          <div className="w-full border-t border-white/40"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-4 shrink-0">

          {/* TOP ICONS ROW */}
          <div className="flex items-center gap-6">
            {/* Mail */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/envelope.svg"
                className="w-6 invert opacity-90"
              />
            </a>

            {/* X */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                className="w-6 invert opacity-90"
                alt="X"
              />
            </a>

            {/* LinkedIn */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                className="w-6 invert opacity-90"
                alt="LinkedIn"
              />
            </a>
          </div>

          {/* BOTTOM ICONS ROW (YT / IG / MORE) */}
          <div className="flex items-center gap-6">
            {/* YouTube */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                className="w-6 invert opacity-90"
                alt="YouTube"
              />
            </a>

            {/* Instagram */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                className="w-6 invert opacity-90"
                alt="Instagram"
              />
            </a>

            {/* More icon */}
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                className="w-6 invert opacity-90"
                alt="More"
              />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
