import Image from "next/image";
import Link from "next/link";

function InfoBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent text-white">
      {/* Left: Company Name */}
      <div className="text-2xl font-bold">Social Mate</div>

      {/* Middle: Nav Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <a href="#features" className="hover:text-blue-400 transition">
          Features
        </a>
        <a href="#pricing" className="hover:text-blue-400 transition">
          Pricing
        </a>
        <a href="#about" className="hover:text-blue-400 transition">
          About
        </a>
      </div>

      {/* Right: Login Button */}
      <div>
        <button className="px-5 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition">
          <Link href="/dashboard">Login</Link>
        </button>
      </div>
    </nav>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1220] to-[#1c2b4d] text-white min-h-screen">
      {/* InfoBar */}
      <InfoBar />

      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transform Your <br />
          <span className="text-blue-400">Instagram Engagement</span> <br />
          with Social Mate
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Slide revolutionizes how you connect with your audience on Instagram.
          Automate responses and boost engagement effortlessly, turning
          interactions into valuable business opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-200 transition font-semibold shadow-lg">
            Learn More
          </button>
        </div>

        {/* Faces Row */}
      </div>
    </section>
  );
}
