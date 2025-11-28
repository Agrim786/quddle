export default function Careers() {
    return (
        <div
            className="w-full min-h-screen text-white bg-white/10"
        >
            <div className="px-6 py-16 max-w-3xl mx-auto text-white">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Careers at Quddle.ai
                </h1>

                {/* Intro */}
                <p className="mb-6 opacity-90 leading-relaxed text-lg text-center max-w-2xl mx-auto">
                    Kickstart your next chapter with Quddle.ai. Join a fast-growing social e-commerce
                    startup that blends video, live shopping, AI marketing, and real-world services into one
                    powerful platform.
                </p>

                {/* Section Title */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Why Work at Quddle.ai
                </h2>

                <p className="mb-6 opacity-90 leading-relaxed">
                    At Quddle.ai, talent is valued, ideas are heard, and everyone contributes directly to
                    building the future of social commerce and AI-driven experiences. The team works across
                    regions and disciplines, giving you exposure to global markets, innovative products, and
                    rapid career growth opportunities.
                </p>

                {/* Section Title */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Who We Look For
                </h2>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Quddle.ai looks for ambitious, curious, and collaborative individuals who are excited
                    about creator economies, live video, digital communities, and AI-led marketing.
                    Whether your skills lie in product, engineering, design, content, sales, or operations,
                    there is room to grow, experiment, and make a visible impact.
                </p>

                {/* Section Title */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    How to Apply
                </h2>

                <p className="mb-10 opacity-90 leading-relaxed">
                    If shaping the future of social e-commerce excites you, Quddle.ai would love to hear
                    from you. Share your CV, portfolio, and a brief note about the role you're interested in
                    by sending an email to:
                    <a
                        href="mailto:HR@quddle.ai"
                        className="underline hover:opacity-80 transition"
                    >
                        HR@quddle.ai
                    </a>
                </p>

                {/* BOTTOM BOX LIKE ADVERTISING PAGE */}
                <div className="bg-black rounded-3xl p-10 text-center border border-white/10">

                    <h3 className="text-2xl text-white font-semibold mb-4">
                        Don’t see your role?
                    </h3>

                    <p className="opacity-80 text-white mb-8 max-w-md mx-auto leading-relaxed">
                        If you're ambitious, hungry, and can ship fast, pitch yourself anyway. Titles are
                        negotiable. Impact isn’t.
                    </p>

                    <a
                        href="mailto:HR@quddle.ai"
                        className="bg-white text-black font-semibold px-8 py-3 rounded-full inline-block hover:opacity-90 transition"
                    >
                        Mail Us ✉
                    </a>

                </div>
            </div>
        </div>
    );
}
