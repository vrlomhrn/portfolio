// import Link from "../dynamic/link";
import Resume from "../../assets/archives/resume.pdf";

const Navbar = () => {
  return (
    <a
      href={Resume}
      className="fixed md:hidden mt-2 p-2 bg-slate-200 text-slate-800 rounded-md hover:bg-slate-200 hover:text-slate-700 hover:border-transparent bottom-2 right-2 z-50 flex gap-2 font-semibold"
      download="vrlomhrn_resume.pdf"
    >
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/material-rounded/24/download--v1.png"
        alt="download--v1"
      />
      Resume
    </a>
  );
};

export default Navbar;
