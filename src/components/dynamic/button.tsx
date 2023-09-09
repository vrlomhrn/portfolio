import { ButtonProps } from "../../lib/@types/components.types";

const Button = ({ buttonType, clickHandler, children }: ButtonProps) => {
  return (
    <button
      type={buttonType}
      className="bg-[#7305EE] rounded-full w-[110px] text-sm text-center text-white py-1"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
