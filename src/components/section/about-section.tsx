// import Virlo from "../../assets/images/vrlomhrn.png";
import Virlo from "../../assets/images/virlo_m.jpg";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="mt-[31px] mx-2  bg-gradient-to-r from-[#D41D6C] via-[#b34b99fc] via-50% to-[#a71d80] rounded p-4">
        <div className="my-2 flex justify-evenly items-center md:flex-col-reverse">
          <div className="px-2 md:mt-2">
            <h4 className="text-slate-200 text-md md:text-lg font-medium">
              Virlo Mahrian Shaffari
            </h4>
            <hr className="border-slate-800" />
            <p className="text-slate-200 text-center italic font-extralight">
              Software Engineer
            </p>
          </div>
          <img src={Virlo} alt="Virlo Mahrian Shaffari" width={125} />
        </div>
      </div>
      <div className="mt-4 mx-2">
        <h3 className="text-[22px] font-semibold">
          About <span className="text-[#D41D6C]">Me?</span>
        </h3>
        <div className="pr-1 md:pr-0">
          <p className="my-1 md:text-[18px] text-justify">
            I am Virlo Mahrian, a passionate Software Engineer with a love for
            all things tech. I spend my days immersed in the world of coding,
            turning ideas into reality one line of code at a time.
          </p>
          <p className="my-1 md:text-[18px] text-justify">
            Beyond the screen, I'm an avid gamer who enjoys exploring virtual
            realms and testing my skills against others. When I'm not gaming,
            you can often find me engrossed in manga, manhwa, light novels, and
            novels, exploring captivating stories and worlds that transport me
            to different dimensions.
          </p>
          <p className="my-1 md:text-[18px] text-justify">
            My personal motto is "I will become a multitalented person one day,
            no matter what." I firmly believe in the power of dedication and
            continuous learning to transform oneself into a well-rounded
            individual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
