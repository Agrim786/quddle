export default function Advertising() {
    return (
        <div
            className="w-full min-h-screen text-white"
            style={{
                background: "linear-gradient(135deg, #673ab7 0%, #9b5bff 45%, #b46bff 100%)"
            }}
        >
            <div className="px-6 py-16 max-w-3xl mx-auto text-black">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Advertise on Quddle.ai
                </h1>

                {/* Intro */}
                <p className="mb-6 opacity-90 leading-relaxed text-lg text-center max-w-2xl mx-auto">
                    Reach your audience where they shop, watch, and connect.
                    At Quddle.ai, advertising goes beyond impressions - it’s about engagement, interaction, and conversion.
                </p>

                {/* Paragraph 1 */}
                <p className="mb-6 opacity-90 leading-relaxed">
                    Quddle.ai is more than a social e-commerce platform. It’s an active community of buyers,
                    creators, and service providers connecting in real-time through reels, live streams,
                    classifieds, and chat rooms. Whether you’re a small business looking to grow locally or
                    a global brand aiming to connect with targeted audiences, Quddle.ai offers tailored
                    advertising solutions powered by cutting-edge AI.
                </p>

                {/* Section Title */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Why Advertise with Quddle.ai?
                </h2>

                {/* Bullet Points */}
                <ul className="list-disc pl-6 space-y-3 opacity-90 leading-relaxed">
                    <li>
                        <strong>Audience that matters</strong> - Engage with users who love discovering new
                        products, experiences, and services.
                    </li>
                    <li>
                        <strong>Live and interactive campaigns</strong> - Host live shopping streams,
                        sponsored events, or influencer collaborations that connect directly with your audience.
                    </li>
                    <li>
                        <strong>Smart targeting</strong> - Use AI-driven insights to reach users based on
                        behavior, interests, location, and real-time activity.
                    </li>
                    <li>
                        <strong>Multi-channel exposure</strong> - Promote through short reels, featured listings,
                        service highlights, and exclusive offer placements.
                    </li>
                    <li>
                        <strong>Measurable performance</strong> - Track engagement, conversions, and audience
                        analytics in real-time to refine your strategy and maximize impact.
                    </li>
                </ul>

                {/* Closing Paragraph */}
                <p className="mt-10 mb-6 opacity-90 leading-relaxed">
                    Quddle.ai helps brands tell their story in the most engaging way possible - through
                    authentic social interaction and intelligent technology. From emerging startups to
                    established businesses, our platform adapts to your goals and scales with your success.
                </p>

                {/* Final Line */}
                <p className="text-lg font-semibold text-center mt-12 mb-16 opacity-95">
                    Partner with Quddle.ai and turn your message
                    <br className="hidden md:block" />
                    into meaningful connections that drive real results.
                </p>

                {/* ===================== BOTTOM BOX ===================== */}
                <div className="bg-black rounded-3xl p-10 text-center border border-white/10">

                    <h3 className="text-2xl text-white font-semibold mb-4">
                        Didn’t find your ad format?
                    </h3>

                    <p className="opacity-80 text-white mb-8 max-w-md mx-auto leading-relaxed">
                        If you know what you want to run, tell us. We shape campaigns around ideas, not menu options.
                    </p>

                    <a
                        href="mailto:tech@quddle.ai"
                        className="bg-white text-black font-semibold px-8 py-3 rounded-full transition-all hover:opacity-90"
                    >
                        Pitch your campaign
                    </a>

                </div>

            </div>
        </div>
    );
}
