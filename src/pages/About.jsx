export default function About() {
    return (
        <div className="w-full min-h-screen bg-white/10">
        <div className="px-6 py-16 max-w-3xl mx-auto text-white">

            {/* Title */}
            <h1 className="text-4xl font-bold mb-8 text-center">
                About Quddle.ai
            </h1>

            {/* Paragraph 1 */}
            <p className="mb-6 opacity-90 leading-relaxed">
                Welcome to Quddle.ai - the next generation of social e-commerce. We bring together
                shopping, entertainment, and connection into one powerful platform designed for the
                digital age.
            </p>

            {/* Paragraph 2 */}
            <p className="mb-6 opacity-90 leading-relaxed">
                Quddle.ai is built for creators, businesses, and everyday users who want more than a
                marketplace. Here, social interaction meets smart commerce. Whether you’re sharing
                short reels, going live to showcase your products, connecting through private chat
                rooms, or discovering local services and deals. Quddle.ai makes digital engagement
                human, exciting, and profitable.
            </p>

            {/* Section Title */}
            <h2 className="text-2xl font-semibold mt-10 mb-4">
                What the Platform Offers
            </h2>

            {/* List */}
            <ul className="list-disc pl-6 space-y-3 opacity-90 leading-relaxed">
                <li>Build your brand with AI-powered marketing and analytics.</li>
                <li>Explore live e-commerce streams and discover trending products.</li>
                <li>Post or browse classifieds and home services with trusted local providers.</li>
                <li>Find exclusive coupons for restaurants, leisure, and lifestyle activities.</li>
                <li>Chat privately or join interest-based community rooms.</li>
            </ul>

            {/* Paragraph 3 */}
            <p className="mt-10 mb-6 opacity-90 leading-relaxed">
                At Quddle.ai, innovation meets community. We believe in empowering users and small
                businesses with technology that enhances the way people shop, sell, and interact
                online. Our mission is to redefine how digital commerce feels - where every
                connection has value, and every moment creates opportunity.
            </p>

            {/* Final Line */}
            <p className="text-lg font-semibold text-center mt-12 opacity-95">
                Join Quddle.ai and experience the future of social e-commerce -
                <br />
                smarter, more connected, and powered by AI.
            </p>

        </div>
        </div>
    );
}
