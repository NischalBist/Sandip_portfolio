const Sandip = () => {
  return (
    <div className="relative w-full" id="home">
      {/* Section 1: Intro */}
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
            I&apos;M <span className="text-blue-400">SANDIP</span>
          </h1>

          <h2 className="text-xl sm:text-3xl text-gray-200 mt-3 tracking-widest">
            SOFTWARE ENGINEER
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl leading-relaxed">
            Building next-generation digital experiences — blending clean UI,
            performance, and modern engineering to create meaningful products.
          </p>
        </div>
      </div>

      {/* Soft Divider Between Sections */}
      {/* Soft Shadow Connector */}
      <div
        className="absolute top-[100vh] left-0 w-full h-20 
    bg-[#1A1D23]
    opacity-60
    blur-2xl
    pointer-events-none
    z-40"
      ></div>

      {/* Section 2: Skills */}
      <div
        className="h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
          <div className="text-white w-full p-10 max-w-6xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-widest">
              01 Professional
            </h2>

            {/* Skill Bar Component */}
            <div className="space-y-4">
              <div>
                <p className="text-lg">HTML / CSS</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">JavaScript</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">React</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    z-50 bg-white/90 backdrop-blur-xl shadow-2xl px-6 py-10 sm:p-10 lg:p-12 
    rounded-3xl w-[90%] sm:w-[70%] lg:w-[45%]"
      >
        <div className="text-center max-w-md mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h1>

          <p className="text-gray-600 text-base leading-relaxed">
            I&apos;m a software engineer passionate about creating elegant,
            efficient, and user-focused digital products. I specialize in
            building modern web applications using cutting-edge technologies and
            thoughtful design.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition mx-auto">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sandip;
