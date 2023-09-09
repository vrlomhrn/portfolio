import { ErrorMessage } from "../@types/data.types";

export const getRepos = async () => {
  try {
    const url = await fetch(import.meta.env.VITE_GITHUB_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const repos = await url.json();

    return repos;
  } catch (err: ErrorMessage | unknown) {
    console.log(err);
  }
};
