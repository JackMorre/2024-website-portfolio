import { links } from "../../../helpers/links";
import Socials from "../aside/Socials";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo.png";

export default function Footer() {
  return (
    <div className="bg-light flex flex-col gap-4 py-6 justify-center items-center sm:flex-row sm:gap-16">
      <img className="w-8" src={logo} alt="jack morrell logo" />
      <ul className="flex gap-4 items-center">
        {links.map((link) => {
          return (
            <li key={link.name} className="text-dark hover:text-color">
              <HashLink smooth to={`/#${link.url}`}>
                {link.name}
              </HashLink>
            </li>
          );
        })}
      </ul>
      <Socials isRow={true} />
    </div>
  );
}
