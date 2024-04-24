import { CardProps } from "../../lib/@types/components.types";
import { useEffect } from "preact/hooks";
import { InitializeAos } from "../../lib/utils/aos-init";

const Card = ({ image, name }: CardProps) => {
  useEffect(() => {
    InitializeAos();
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center space-y-3 py-2 rounded w-[100px] h-[100px] bg-white px-2"
      data-aos="flip-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="500"
    >
      <img src={image} alt="techstack" width={48} height={48} />

      <p className="text-sm text-center font-medium">{name}</p>
    </div>
  );
};

export default Card;
