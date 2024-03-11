import { skills } from "../../../helpers/skills";

export default function Skills() {
  return (
    <div className=" bg-dark px-4 py-4 ">
      <ul className="flex gap-3 text-light flex-wrap justify-center font-merriweather xl:text-2xl lg:max-w-5xl mx-auto">
        {skills.map((skill) => {
          return (
            <li key={skill} className="bg-color px-3 py-1 text-nowrap">
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
