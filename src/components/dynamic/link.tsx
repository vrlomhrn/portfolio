import type { LinkProps } from "../../lib/@types/components.types";

const Link = ({ url, children }: LinkProps) => {
  return <a href={url}>{children}</a>;
};

export default Link;
