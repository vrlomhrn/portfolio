import AOS from "aos";
import "aos/dist/aos.css";

export const InitializeAos = () => {
  return AOS.init({
    duration: 500,
  });
};
