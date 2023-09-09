import { ErrorMessage } from "../@types/data.types";

export const getProjects = async () => {
  try {
    const url = await fetch("../../data/projects.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const projects = await url.json();

    console.log(projects);

    return projects;
  } catch (err: ErrorMessage | unknown) {
    console.log(err);
  }
};
