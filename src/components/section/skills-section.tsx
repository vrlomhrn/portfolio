import Card from "../dynamic/card-brand";
import NestJsIcon from "../../assets/images/nestjs.svg";
import CSharp from "../../assets/images/c-sharp.png";
import DotNet from "../../assets/images/dotnet.svg";

const SkillsSection = () => {
  return (
    <section id="stack" className="mt-4 py-2 bg-[#EBF1FF]">
      <div className="mx-2">
        <h3 className="text-[22px] font-semibold">
          Tech <span className="text-[#D41D6C]">Stack</span>
        </h3>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Programming Languages
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card image="https://img.icons8.com/color/48/000000/javascript.png" />
              <Card image="https://img.icons8.com/color/48/000000/golang.png" />
              <Card image="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" />
              <Card image="https://img.icons8.com/color/48/000000/python.png" />
              <Card image="https://img.icons8.com/officel/80/php-logo.png" />
              <Card image="https://img.icons8.com/color/48/dart.png" />
              <Card image="https://img.icons8.com/color/48/c-plus-plus-logo.png" />
              <Card image={CSharp} />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Frameworks
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card image="https://img.icons8.com/color/48/nextjs.png" />
              <Card image="https://img.icons8.com/color/48/nuxt-jc.png" />
              <Card image="https://img.icons8.com/fluency/48/laravel.png" />
              <Card image="https://img.icons8.com/ios/50/express-js.png" />
              <Card image="https://img.icons8.com/color/48/react-native.png" />
              <Card image="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png" />
              <Card image="https://img.icons8.com/color/48/flutter.png" />
              <Card image={NestJsIcon} />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Tools & Miscellaneous
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card image="https://img.icons8.com/color/48/git.png" />
              <Card image="https://img.icons8.com/material-outlined/48/github.png" />
              <Card image="https://img.icons8.com/fluency/48/docker.png" />
              <Card image="https://img.icons8.com/color/48/linux--v1.png" />
              <Card image="https://img.icons8.com/color/48/amazon-web-services.png" />
              <Card image="https://img.icons8.com/fluency/48/azure-1.png" />
              <Card image="https://img.icons8.com/color/48/typescript.png" />
              <Card image="https://img.icons8.com/fluency/48/node-js.png" />
              <Card image={DotNet} />
              <Card image="https://img.icons8.com/color/48/graphql.png" />
              <Card image="https://img.icons8.com/color/48/tailwindcss.png" />
              <Card image="https://img.icons8.com/color-glass/48/bootstrap.png" />
              <Card image="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" />
              <Card image="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png" />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-[18px] font-medium underline underline-offset-4">
            Databases
          </h5>

          <div className="mt-2 max-w-full">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start py-2">
              <Card image="https://img.icons8.com/color/48/mysql-logo.png" />
              <Card image="https://img.icons8.com/color/48/postgreesql.png" />
              <Card image="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
