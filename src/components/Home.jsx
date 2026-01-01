
import myPic from "../assets/maddy.jpg";
import myResume from "../assets/madhavResume.pdf";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-[1.2fr_1.8fr] gap-12 items-center">

        {/* Image + Socials */}
        <div className="flex flex-col items-center scale-110">
          <img
            src={myPic}
            className="w-56 h-56 rounded-full shadow-xl mb-6 object-cover"
          />

          <div className="flex gap-6 text-muted dark:text-muted-dark text-2xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-[#0A66C2] hover:scale-125 hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-[#0A66C2] hover:scale-125 hover:-translate-y-1"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:madhavtulugu.12@gmail.com"
              className="transition-all duration-300 hover:text-accent hover:scale-125 hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Intro */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Madhav Tulugu 👋</h1>

          <p className="text-xl text-accent dark:text-accent-dark mb-4">
            Backend Developer | React Enthusiast
          </p>

          <p className="mb-6 text-muted dark:text-muted-dark leading-relaxed">
            I’m a Java backend developer with strong experience in Spring Boot, databases, and problem-solving.
            I enjoy building scalable systems and continuously improving my technical skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={myResume}
              download
              className="px-6 py-3 rounded-lg bg-accent dark:bg-accent-dark text-white hover:opacity-90 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-accent dark:border-accent-dark text-accent dark:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
