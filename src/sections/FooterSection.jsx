
const FooterSection = () => {

  return (
    <footer className="w-full bg-[#000000] text-white py-12 px-6 md:px-20">

      {/* MAIN FLEX — LEFT | CENTER NUMBERS | RIGHT */}
      <div className="flex items-center justify-between w-full gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-2 shrink-0">

          {/* LOGO + NAME SIDE-BY-SIDE */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo2.gif"
              alt="Quddle.ai"
              className="w-10 md:w-12"
            />
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Quddle.ai
            </h1>
          </div>

          {/* COPYRIGHT */}
          <p className="text-sm text-white/70">The one stop AI Shopping app</p>
        </div>


        {/* CENTER NUMBERS */}
        <div className="flex flex-col items-center gap-3 flex-1">

          <div className="flex items-center gap-10">
            {/* Users */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold">0</p>
              <span className="text-sm text-white/60">Users</span>
            </div>

            <div className="h-10 w-px bg-white/30"></div>

            {/* Advertisers */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold">0</p>
              <span className="text-sm text-white/60">Advertisers</span>
            </div>

            <div className="h-10 w-px bg-white/30"></div>

            {/* Sellers */}
            <div className="flex flex-col items-center">
              <p className="text-4xl font-semibold">0</p>
              <span className="text-sm text-white/60">Sellers</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-4 shrink-0">

          {/* TOP ICONS ROW */}
          <div className="flex items-center gap-6">
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/envelope.svg"
                className="w-6 invert opacity-90"
              />
            </a>

            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                className="w-6 invert opacity-90"
                alt="X"
              />
            </a>

            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                className="w-6 invert opacity-90"
                alt="LinkedIn"
              />
            </a>
          </div>

          {/* BOTTOM ICONS ROW */}
          <div className="flex items-center gap-6">
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                className="w-6 invert opacity-90"
                alt="YouTube"
              />
            </a>

            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                className="w-6 invert opacity-90"
                alt="Instagram"
              />
            </a>

            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                className="w-6 invert opacity-90"
                alt="Facebook"
              />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
