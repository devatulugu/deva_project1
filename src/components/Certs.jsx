
import { useEffect, useRef, useState } from "react";

const certsData = [
  {
    title: "Java Spring Boot Certification",
    issuer: "Udemy",
    year: "2024",
    description:
      "Completed hands-on training on building REST APIs with Spring Boot.",
    link: "https://example.com",
  },
  {
    title: "React & Frontend Development",
    issuer: "Coursera",
    year: "2023",
    description:
      "Learned modern React, hooks, component architecture and best practices.",
    link: "https://example.com",
  },
  {
    title: "Database Management Systems",
    issuer: "NPTEL",
    year: "2022",
    description:
      "Studied relational models, SQL optimization, and normalization concepts.",
    link: null,
  },
];

function CertCard({ cert, visible }) {
  return (
    <div
      className={`
        relative rounded-2xl p-6 bg-surface dark:bg-surface-dark
        shadow-md dark:shadow-lg ring-1 ring-black/5 dark:ring-white/5
        backdrop-blur-sm transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        hover:-translate-y-2 hover:shadow-2xl hover:ring-accent/30 dark:hover:ring-accent-dark/30
      `}
    >
      {/* Subtle glow accent */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

      <h3 className="text-lg font-semibold mb-1 tracking-tight">
        {cert.title}
      </h3>

      <p className="text-sm font-medium text-accent dark:text-accent-dark">
        {cert.issuer} • {cert.year}
      </p>

      <p className="text-sm text-muted dark:text-muted-dark mt-2 mb-3 leading-relaxed">
        {cert.description}
      </p>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent dark:text-accent-dark hover:underline underline-offset-4"
        >
          View Certificate →
        </a>
      )}
    </div>
  );
}

function Certs() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certs"
      ref={ref}
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">
          Certifications & Achievements
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {certsData.map((cert, i) => (
            <CertCard key={i} cert={cert} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certs;
