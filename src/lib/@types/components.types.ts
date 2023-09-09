import React from "preact/compat";

export type LinkProps = {
  url: string;
  children: React.ReactNode;
};

export type CardProps = {
  image: string;
  name?: string;
  url?: string | undefined;
  target?: string;
};

export type ButtonProps = {
  buttonType: "button" | "submit" | "reset";
  clickHandler?: (e: MouseEvent) => void;
  children: React.ReactNode;
};
