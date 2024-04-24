import { useEffect } from "preact/hooks";
import { CardProps } from "../../lib/@types/components.types";
import Button from "./button";
import { InitializeAos } from "../../lib/utils/aos-init";

const PortfolioCard = ({ image, name, url, target }: CardProps) => {
  useEffect(() => {
    InitializeAos();
  }, []);
  return (
    <div
      className="flex flex-col space-y-2 items-center md:max-w-[350px] p-2"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img src={image} alt="nature" width="100%" />

      <h5 className="text-2xl text-center font-semibold capitalize">{name}</h5>

      <Button buttonType="button" clickHandler={() => window.open(url, target)}>
        See Detail
      </Button>
    </div>
  );
};

export default PortfolioCard;
