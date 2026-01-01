
import { useEffect, useRef, useState } from "react";

const experienceData = [
  {
    role: "C++ developer Intern",
    company: "VizExper pvt ltd",
    duration: "Sep 2023 – Jan 2024",
    description:
      "Design, build, and maintain efficient, reusable, and reliable C++ code.",
  },
  {
    role: "Java Backend Engineer",
    company: "Hashmap Innovations",
    duration: "Feb 2024 – Present",
    description:
      "builds the server-side logic, databases, and APIs that power websites and applications, handling data, security, and complex business rules behind the scenes, ensuring performance and scalability for users ",
  },
];

function ExperienceItem({ item, visible, index }) {
  return (
    <div
      style={{ transitionDelay: `${index * 300}ms` }}
      className={`relative pl-8 pb-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent dark:bg-accent-dark" />
      <span className="absolute left-[5px] top-4 w-[2px] h-full bg-muted/30 dark:bg-muted-dark/30" />

      <h3 className="text-lg font-semibold">{item.role}</h3>
      <p className="text-sm text-accent dark:text-accent-dark">
        {item.company}
      </p>
      <p className="text-xs text-muted dark:text-muted-dark mb-2">
        {item.duration}
      </p>
      <p className="text-sm text-muted dark:text-muted-dark">
        {item.description}
      </p>
    </div>
  );
}

function Experience() {
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
    <div ref={ref}>
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div className="relative">
        {experienceData.map((item, i) => (
          <ExperienceItem
            key={i}
            item={item}
            index={i}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
