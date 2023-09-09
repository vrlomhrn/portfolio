import { CardProps } from "../../lib/@types/components.types";

const Card = ({ image, name }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 py-2 rounded w-[100px] h-[100px] bg-white px-2">
      <img src={image} alt="techstack" width={48} />

      <p className="text-sm text-center">{name}</p>
    </div>
  );
};

export default Card;
