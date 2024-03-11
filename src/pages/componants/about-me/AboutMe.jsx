export default function AboutMe() {
  return (
    <div
      id="about-me"
      className="bg-light flex flex-col gap-8 items-center justify-center font-merriweather text-xl font-light px-8 py-16 md:text-3xl md:py-32 sm:text-3xl md:px-20 lg:text-4xl"
    >
      <h2>
        <span className="font-semibold text-color">
          Enthusiastic Front-End Engineer
        </span>{" "}
        with over two years of experience crafting projects from conception to
        completion, drawing inspiration from personal designs, Udemy courses,
        and Front-End Mentorship. Specialising in mobile-first design, I have a
        keen eye for detail and
        <span className="font-semibold text-color">
          {" "}
          passion for creating seamless user experiences.
        </span>
      </h2>
      <h2>
        <span className="font-semibold text-color">
          I can quickly grasp emerging technologies
        </span>{" "}
        and anticipate industry trends, allowing for effective
        adaptation and innovation.
      </h2>
    </div>
  );
}
