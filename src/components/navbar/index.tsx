import { RxHamburgerMenu } from "react-icons/rx";
import Navlink from "./nav-link";
import { sections } from "@/src/utils/constants";

export default function Navbar() {
  return (
    <nav className="min-h-screen min-w-15 shadow-lg bg-white text-black">
      <div className="navbar flex flex-col gap-5 text-gray-500 fixed h-screen z-50 bg-white border-r border-zinc-300">
        <button className="flex items-start justify-start pl-5 pt-5 text-2xl">
        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle">
        <RxHamburgerMenu />
          </label>
      </button>

      <div>
        {sections.map((i,key) => (
          <Navlink {...i} key={key} />
        ))}
      </div>
     </div>
     </nav>
  )
}