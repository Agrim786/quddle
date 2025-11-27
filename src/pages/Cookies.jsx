export default function Cookies() {
    return (
        <div
            className="w-full min-h-screen text-white"
            style={{
                background: "linear-gradient(135deg, #4969b2ff 0%, #7a9de2ff 35%, #5178c1ff 100%)"
            }}
        >
            <div className="px-6 py-16 max-w-3xl mx-auto text-black">

                {/* Title */}
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Quddle.ai Cookie Policy
                </h1>

                {/* ====================== SECTION 1 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    1. What Are Cookies and Similar Technologies
                </h2>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Quddle.ai uses cookies and similar technologies such as SDKs, pixels, and local
                    storage to operate the platform, improve performance, personalize content, and support
                    security and advertising features. Cookies are small text files stored on your device
                    that help recognize your browser or app on subsequent visits.
                </p>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Some cookies are set directly by Quddle.ai (first-party cookies), while others are set
                    by partners such as analytics or advertising providers (third-party cookies). Cookies
                    may be session-based (expire when closed) or persistent (remain on your device longer).
                </p>

                {/* ====================== SECTION 2 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    2. Why Quddle.ai Uses Cookies
                </h2>

                <ul className="list-disc pl-6 space-y-3 opacity-90 leading-relaxed">
                    <li>To remember your preferences and settings (language, region, login state).</li>
                    <li>To keep your session secure and prevent fraud or unauthorized access.</li>
                    <li>To understand how you use the platform so we can improve features and design.</li>
                    <li>To personalize content, recommendations, and AI-powered discovery.</li>
                    <li>To measure ad performance and deliver relevant advertising where allowed.</li>
                </ul>

                <p className="mt-6 mb-6 opacity-90 leading-relaxed">
                    Without certain cookies, parts of Quddle.ai may not function properly or may lose
                    personalization and stability.
                </p>

                {/* ====================== SECTION 3 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    3. Types of Cookies We Use
                </h2>

                <ul className="list-disc pl-6 space-y-4 opacity-90 leading-relaxed">

                    <li>
                        <strong>Strictly necessary / technical cookies:</strong> Essential for signing in,
                        securing your account, basic navigation, and load balancing. These cannot be disabled
                        because the platform relies on them to operate.
                    </li>

                    <li>
                        <strong>Preference / functionality cookies:</strong> Store choices such as language,
                        saved filters, location, and display preferences for a smoother experience.
                    </li>

                    <li>
                        <strong>Analytics / performance cookies:</strong> Help us understand which features are
                        used, how long sessions last, pages visited, and errors encountered. This data is
                        aggregated and used to improve reliability and performance.
                    </li>

                    <li>
                        <strong>Advertising / marketing cookies:</strong> Used (where permitted) to deliver
                        relevant ads, prevent repetitive ads, and measure campaign effectiveness.
                    </li>

                    <li>
                        <strong>Social media & third-party feature cookies:</strong> Enable embedded videos,
                        social login, or share tools, and allow these providers to understand your
                        interactions with their services.
                    </li>

                </ul>

                <p className="mt-6 mb-6 opacity-90 leading-relaxed">
                    On mobile apps, many of these functions are handled through SDKs and device identifiers
                    instead of traditional browser cookies, but the purpose remains similar.
                </p>

                {/* ====================== SECTION 4 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    4. Third-Party Cookies and Technologies
                </h2>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Quddle.ai works with certain analytics, security, payment, and advertising partners who
                    may use cookies or similar technologies. These partners help measure performance,
                    improve stability, and deliver relevant ads. They may collect information about your use
                    of Quddle.ai and other services over time, following their own privacy and cookie
                    policies.
                </p>

                {/* ====================== SECTION 5 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    5. How You Can Manage Cookies
                </h2>

                <ul className="list-disc pl-6 space-y-3 opacity-90 leading-relaxed">
                    <li><strong>Browser settings:</strong> Review, delete, or block cookies in privacy/security settings.</li>
                    <li><strong>Device settings:</strong> Reset/limit ad identifiers or tracking permissions on mobile.</li>
                    <li><strong>In-product controls:</strong> Quddle.ai may offer controls for analytics or personalized ads.</li>
                    <li><strong>Third-party opt-outs:</strong> Some vendors offer tools to control analytics or ad tracking.</li>
                </ul>

                <p className="mt-6 mb-6 opacity-90 leading-relaxed">
                    Even after opting out, you may still see ads - they will just be less personalized.
                </p>

                {/* ====================== SECTION 6 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    6. Cookies, Privacy & Your Rights
                </h2>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Information collected through cookies may be treated as personal data where it uniquely
                    identifies or can reasonably identify you. In such cases, this Cookie Policy should be
                    read together with the Quddle.ai Privacy Policy.
                </p>

                <p className="mb-6 opacity-90 leading-relaxed">
                    Depending on your jurisdiction, you may have rights to access, correct, delete, or
                    restrict processing of your data, and to object to certain uses such as targeted
                    advertising.
                </p>

                {/* ====================== SECTION 7 ====================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    7. Updates to This Cookie Policy
                </h2>

                <p className="mb-16 opacity-90 leading-relaxed">
                    Quddle.ai may update this Cookie Policy from time to time to reflect changes in
                    technology, legal requirements, or platform updates. Continued use after updates go
                    live indicates that you understand and accept the revised policy.
                </p>

            </div>
        </div>
    );
}
