import Link from "../dynamic/link";

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-2 w-[147px] border border-slate-800 rounded-full z-50">
      <ul className="flex px-[8px] py-[6px] justify-around">
        <li className="font-medium hover:underline hover:text-opacity-80 hover:text-[#7305EE]">
          <Link url="/">Profile</Link>
        </li>
        <li className="font-medium">|</li>
        <li className="font-medium hover:underline hover:text-opacity-80">
          <Link url="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
