import { useState, useEffect } from "react";
import portfolioData from "../data/portfolio.json";

export const usePortfolio = () => {
  const [data, setData] = useState(portfolioData);

  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem("portfolioData", JSON.stringify(newData));
  };

  const updateSection = (section, newSectionData) => {
    const updatedData = {
      ...data,
      [section]: newSectionData,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
    updateData(updatedData);
  };

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      completedDate: new Date().toISOString().split("T")[0],
    };
    updateSection("projects", [...data.projects, newProject]);
  };

  const updateProject = (projectId, updatedProject) => {
    const updatedProjects = data.projects.map((project) =>
      project.id === projectId ? { ...project, ...updatedProject } : project
    );
    updateSection("projects", updatedProjects);
  };

  const deleteProject = (projectId) => {
    const filteredProjects = data.projects.filter(
      (project) => project.id !== projectId
    );
    updateSection("projects", filteredProjects);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error loading saved data:", error);
      }
    }
  }, []);

  return {
    data,
    updateData,
    updateSection,
    addProject,
    updateProject,
    deleteProject,
  };
};
