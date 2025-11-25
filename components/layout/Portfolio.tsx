import Image from "next/image";

const Portfolio = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop')",
      }}
    >
      {/* Gray Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 p-10 text-white max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-widest">
          02 Portfolio
        </h2>
        <p className="text-lg text-gray-200 mb-6">My latest work</p>

        {/* See More Button */}
        <button className="mb-10 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition">
          See More
        </button>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              alt="project1"
              width={48}
              height={48}
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold">Project One</h3>
              <p className="text-gray-300 text-sm">A modern clean UI design</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              alt="project2"
              width={48}
              height={48}
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold">Project Two</h3>
              <p className="text-gray-300 text-sm">
                Full‑stack responsive website
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800"
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              alt="project3"
              width={48}
              height={48}
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold">Project Three</h3>
              <p className="text-gray-300 text-sm">
                Creative portfolio showcase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
