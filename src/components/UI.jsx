import { motion } from "framer-motion";

export const Card = ({ children, className = "", delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`glass-effect rounded-xl p-6 shadow-lg hover:shadow-xl hover:glow transition-all duration-300 space-background ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:glow";

  const variants = {
    primary:
      "bg-accent-primary hover:bg-accent-secondary text-white focus:ring-accent-primary shadow-lg",
    secondary:
      "glass-effect hover:bg-opacity-30 text-primary border border-glass-border",
    accent:
      "gradient-text-bg text-white hover:shadow-lg focus:ring-accent-primary",
    ghost: "hover:glass-effect text-primary hover:text-accent-primary",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background:
          variant === "primary"
            ? "var(--accent-primary)"
            : variant === "accent"
            ? "var(--accent-gradient)"
            : undefined,
      }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Section = ({ children, className = "", ...props }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`section-padding space-background ${className}`}
    {...props}
  >
    <div className="stars"></div>
    {children}
  </motion.section>
);

export const GradientText = ({ children, className = "" }) => (
  <span className={`gradient-text ${className}`}>{children}</span>
);
