import Card from "../dynamic/card-brand";
import NestJsIcon from "../../assets/images/nestjs.svg";

const SkillsSection = () => {
  return (
    <section id="stack" className="mt-4 py-2 bg-[#EBF1FF]">
      <div className="mx-2">
        <h3 className="text-[22px] font-semibold">
          Tech <span className="text-[#D41D6C]">Stack</span>
        </h3>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Programming Language
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card
                image="https://img.icons8.com/color/48/000000/javascript.png"
                name="Javascript"
              />
              <Card
                image="https://img.icons8.com/color/48/000000/golang.png"
                name="Go"
              />
              <Card
                image="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
                name="Java"
              />
              <Card
                image="https://img.icons8.com/color/48/000000/python.png"
                name="Python"
              />
              <Card
                image="https://img.icons8.com/officel/80/php-logo.png"
                name="PHP"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Frameworks
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card
                image="https://img.icons8.com/color/48/nextjs.png"
                name="Next"
              />
              <Card
                image="https://img.icons8.com/color/48/nuxt-jc.png"
                name="Nuxt"
              />
              <Card
                image="https://img.icons8.com/fluency/48/laravel.png"
                name="Laravel"
              />
              <Card
                image="https://img.icons8.com/ios/50/express-js.png"
                name="Express"
              />
              <Card
                image="https://img.icons8.com/color/48/react-native.png"
                name="React Native"
              />
              <Card image={NestJsIcon} name="Nest" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Misc
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card
                image="https://img.icons8.com/color/48/git.png"
                name="Git"
              />
              <Card
                image="https://img.icons8.com/material-outlined/48/github.png"
                name="Github"
              />
              <Card
                image="https://img.icons8.com/fluency/48/docker.png"
                name="Docker"
              />
              <Card
                image="https://img.icons8.com/color/48/linux--v1.png"
                name="Linux"
              />
              <Card
                image="https://img.icons8.com/color/48/amazon-web-services.png"
                name="Amazon Web Services"
              />
              <Card
                image="https://img.icons8.com/fluency/48/azure-1.png"
                name="Azure"
              />
              <Card
                image="https://img.icons8.com/color/48/typescript.png"
                name="Typescript"
              />
              <Card
                image="https://img.icons8.com/fluency/48/node-js.png"
                name="NodeJs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
