import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Food & Delivery Web App",
    description:
      "A modern food ordering platform with real-time tracking and a clean, intuitive interface.",
    image: "/images/project1.jpg",
  },
  {
    id: 2,
    title: "Blood Donation Web App",
    description:
      "A community-focused platform connecting donors and recipients with smart matching tools.",
    image: "/images/project2.jpg",
  },
  {
    id: 3,
    title: "Furniture Web App",
    description:
      "A stylish product browsing experience with rich visuals and responsive layouts.",
    image: "/images/project3.jpg",
  },
  {
    id: 4,
    title: "Hardware Web App",
    description:
      "A modern hardware showcase featuring product exploration and clean UI design.",
    image: "/images/project4.jpg",
  },
];

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
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
