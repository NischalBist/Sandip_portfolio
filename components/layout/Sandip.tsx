const Sandip = () => {
  return (
    <div className="relative w-full" id="home">
      {/* Section 1: Intro */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Sandip.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-wide drop-shadow-xl">
            I&apos;M <span className="text-blue-400">SANDIP</span>
          </h1>

          <h2 className="text-xl sm:text-3xl text-gray-200 mt-3 tracking-widest">
            FRONTEND DEVELOPER
          </h2>

          <p className="text-gray-300 mt-4 text-sm sm:text-base max-w-xl leading-relaxed">
            Building next-generation interfaces — uniting thoughtful UI, smooth
            performance, and modern front-end engineering to craft experiences
            people love.
          </p>
        </div>
      </div>

      {/* Soft Divider Between Sections */}
      {/* Soft Shadow Connector */}
      {/* <div className="absolute top-[100vh] left-0 w-full h-20 bg-[#1A1D23] opacity-60 blur-2xl pointer-events-none z-40"></div> */}
      <div
        className="absolute top-[100vh] left-0 w-full h-32 pointer-events-none z-40
  bg-linear-to-b from-black/80 via-black/50 to-black/80"
      ></div>

      {/* Section 2: Skills */}
      <div
        className="h-[120vh] sm:h-screen w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/background1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center pt-64 lg:pt-16">
          <div className="text-white w-full p-10 max-w-6xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-widest">
              01 Professional
            </h2>

            {/* Skill Bar Component */}
            <div className="space-y-4">
              <div>
                <p className="text-lg">HTML</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">CSS</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">JavaScript</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">PHP</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">WordPress</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="text-lg">Angular</p>
                <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: "60%" }}
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
    rounded-3xl w-[80%] sm:w-[60%] lg:w-[50%]"
      >
        <div className="text-center max-w-md mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Me
          </h1>

          <p className="text-gray-600 text-base leading-relaxed">
            I&apos;m a front-end engineer focused on crafting elegant,
            efficient, and user-centered digital experiences. I build modern web
            applications using contemporary technologies, thoughtful design, and
            a strong attention to performance.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition mx-auto"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sandip;
