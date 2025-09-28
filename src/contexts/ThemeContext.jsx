import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark (space) theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    // Update CSS custom properties based on theme
    const root = document.documentElement;

    if (isDark) {
      // Space/Dark theme colors (ColorHunt "Far Far Away" + cosmic variants)
      root.style.setProperty("--bg-primary", "#0a0b1e"); // Deep space
      root.style.setProperty("--bg-secondary", "#162447"); // Dark blue
      root.style.setProperty("--bg-tertiary", "#1f4068"); // Medium blue
      root.style.setProperty("--text-primary", "#e8f4fd"); // Light blue-white
      root.style.setProperty("--text-secondary", "#9ccddc"); // Soft blue
      root.style.setProperty("--text-muted", "#5591a9"); // Muted blue
      root.style.setProperty("--accent-primary", "#7209b7"); // Cosmic purple
      root.style.setProperty("--accent-secondary", "#560bad"); // Deep purple
      root.style.setProperty(
        "--accent-gradient",
        "linear-gradient(135deg, #7209b7 0%, #560bad 50%, #480ca8 100%)"
      );
      root.style.setProperty("--glass-bg", "rgba(31, 64, 104, 0.1)");
      root.style.setProperty("--glass-border", "rgba(156, 205, 220, 0.2)");
    } else {
      // Light theme colors (cosmic-inspired light palette)
      root.style.setProperty("--bg-primary", "#f8fafc"); // Light gray
      root.style.setProperty("--bg-secondary", "#e2e8f0"); // Soft gray
      root.style.setProperty("--bg-tertiary", "#cbd5e1"); // Medium gray
      root.style.setProperty("--text-primary", "#1e293b"); // Dark gray
      root.style.setProperty("--text-secondary", "#475569"); // Medium gray
      root.style.setProperty("--text-muted", "#64748b"); // Muted gray
      root.style.setProperty("--accent-primary", "#8b5cf6"); // Light purple
      root.style.setProperty("--accent-secondary", "#7c3aed"); // Medium purple
      root.style.setProperty(
        "--accent-gradient",
        "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6366f1 100%)"
      );
      root.style.setProperty("--glass-bg", "rgba(255, 255, 255, 0.7)");
      root.style.setProperty("--glass-border", "rgba(203, 213, 225, 0.3)");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
