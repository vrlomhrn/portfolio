import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 left-4 z-50 p-3 rounded-full glass-effect hover:glow transition-all duration-300"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun className="w-6 h-6 text-accent-primary" />
        ) : (
          <Moon className="w-6 h-6 text-accent-primary" />
        )}
      </motion.div>
    </motion.button>
  );
};
