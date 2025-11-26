"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      date: "2021 - Present",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      description:
        "Leading UI development, optimizing performance, and creating design systems.",
    },
    {
      date: "2019 - 2021",
      title: "Frontend Developer",
      company: "Creative Studio",
      description:
        "Built web interfaces, collaborated with designers, and improved UX flows.",
    },
    {
      date: "2017 - 2019",
      title: "Junior Developer",
      company: "WebStart",
      description:
        "Developed responsive websites and learned modern JavaScript frameworks.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full min-h-[150vh] py-20 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Heading */}
        <div className="relative z-10 p-10 text-white max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-widest">
            03 Experience
          </h2>
          <p className="text-lg text-gray-200 mb-6">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[3px] bg-white/40 -translate-x-1/2"></div>

          {/* Mobile Left Line */}
          <div className="lg:hidden absolute left-6 top-0 h-full w-[3px] bg-white/40"></div>

          <div className="space-y-20 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-start w-full ${
                    isLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Mobile Date */}
                  <p className="lg:hidden text-gray-200 text-sm mb-2 ml-12 font-medium">
                    {exp.date}
                  </p>

                  {/* Dot */}
                  <div
                    className={`
                      mt-24 absolute w-5 h-5 bg-white border-2 border-gray-700 rounded-full z-20 
                      left-[25px] lg:left-1/2 -translate-x-1/2 top-2
                    `}
                  ></div>

                  {/* Card */}
                  <div
                    className={`
                      bg-white/80 backdrop-blur-lg shadow-xl rounded-xl sm:w-[80%] lg:w-[45%] p-5 md:p-6 mt-6 ml-12 lg:ml-0`}
                  >
                    <h3 className="text-gray-900 font-semibold text-xl">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{exp.company}</p>
                    <p className="text-gray-700 mt-3 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Desktop Date */}
                    <p className="hidden lg:block text-gray-600 mt-3 font-medium text-right">
                      {exp.date}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Contact Card (between two sections like your Sandip example) */}
      <div id="contact" className="h-[160vh] lg:h-screen">
        {/* Floating Contact Card Between Sections */}
        <div className="absolute top-1/3 lg:top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-50 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl w-[95%] sm:w-[85%] lg:w-[70%] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE — MESSAGE + INFO + SOCIALS */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-wide mb-4">
                  CONTACT
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I&apos;d love to hear from you. Whether you&apos;re planning a
                  new project, looking for a collaborator, or just want to say
                  hello, feel free to reach out.
                </p>

                <p className="text-gray-800 mb-1">
                  E-mail: sandipchhetri2071@gmail.com
                </p>
                <p className="text-gray-800">Phone: +977 9865212346</p>
              </div>

              {/* Social icons */}
              <div className="flex items-center space-x-4 mt-10">
                <a
                  className="text-gray-700 hover:text-black transition"
                  href="https://www.linkedin.com/in/sandip-shakhi-chhetri-9276a12b2/"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  className="text-gray-700 hover:text-black transition"
                  href="https://twitter.com"
                  target="_blank"
                >
                  <Twitter className="w-6 h-6" />
                </a>

                <a
                  className="text-gray-700 hover:text-black transition"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <Instagram className="w-6 h-6" />
                </a>

                <a
                  className="text-gray-700 hover:text-black transition"
                  href="https://www.facebook.com/sandip.chhetri.995704"
                  target="_blank"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — CONTACT FORM */}
            <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-xl p-6 sm:p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="p-3 rounded-lg bg-gray-100 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="p-3 rounded-lg bg-gray-100 outline-none"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                ></textarea>

                <button className="w-full py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
