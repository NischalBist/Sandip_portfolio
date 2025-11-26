"use client";

const DesktopNav = () => {
  return (
    <div className="relative py-4 px-6 hidden sm:flex items-center justify-center bg-[#1A1D23] text-[#F5F7FA] shadow-sm">
      <h1 className="absolute top-1/2 left-48 transform -translate-y-1/2 text-xl font-semibold uppercase">
        Sandip
      </h1>

      <nav className="flex space-x-8 text-lg text-[16px] font-semibold">
        <a href="#home" className="uppercase hover:text-gray-400 transition">
          Home
        </a>
        <a href="#about" className="uppercase hover:text-gray-400 transition">
          About
        </a>
        <a
          href="#experience"
          className="uppercase hover:text-gray-400 transition"
        >
          Experience
        </a>
        <a href="#contact" className="uppercase hover:text-gray-400 transition">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default DesktopNav;
