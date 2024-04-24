import { useState, useEffect } from "preact/hooks";
import PortfolioCard from "../dynamic/card-portfolio";
import { getRepos } from "../../lib/utils/get-repositories";
import DefaultImage from "../../assets/images/projects/repositories.png";
import { projects } from "../../data/data-projects";
import type { Projects } from "../../lib/@types/data.types";

const PortfolioSection = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await getRepos();

      setRepos(repos);
    };

    fetchRepos();
  }, []);
  return (
    <section id="portfolio" className="mt-4">
      <h3 className="text-[22px] mx-2 font-semibold">
        Portfolio<span className="text-[#D41D6C]">(s)</span>
      </h3>

      <div className="mt-4 mx-2">
        <h5 className="text-[18px] font-medium underline underline-offset-4 mb-2">
          Projects
        </h5>
        <div className="space-y-4 flex flex-col md:flex-row md:justify-around md:items-center md:flex-wrap">
          {projects.map((project: Projects) => {
            const { name, image, url } = project;

            return (
              <PortfolioCard
                image={image}
                name={name.split("-").join(" ")}
                url={url}
                target="_blank"
              />
            );
          })}
        </div>
      </div>

      <div className="mt-4 mx-2">
        <h5 className="text-[18px] font-medium underline underline-offset-4 mb-2">
          Github Repositories
        </h5>
        <div className="space-y-4 flex flex-col md:flex-row md:justify-around md:items-center md:flex-wrap">
          {repos.map((repo: { name: string; html_url: string }) => {
            const { name, html_url } = repo;

            return (
              <PortfolioCard
                image={DefaultImage}
                name={name.split("-").join(" ")}
                url={html_url}
                target="_blank"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
