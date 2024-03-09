import { skills } from "../../../helpers/skills";

export default function Skills() {
  return (
    <div className=" bg-dark px-4 py-6 ">
      <ul className="flex gap-6 text-light items-baseline overflow-x-scroll md:overflow-x-auto md:flex-wrap md:justify-center font-merriweather xl:text-2xl">
        {skills.map((skill) => {
          return (
            <li key={skill} className="bg-color px-4 py-1 text-nowrap">
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
