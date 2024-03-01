import { links } from "../../../helpers/links";
import Socials from "../aside/Socials";

export default function Footer() {
  return (
    <div className="bg-light flex flex-col gap-4 py-12 justify-center items-center">
      <h5>JM</h5>
      <ul className="flex flex-col items-center">
        {links.map((link) => {
          return <li>{link.name}</li>;
        })}
      </ul>
      <Socials />
    </div>
  );
}
