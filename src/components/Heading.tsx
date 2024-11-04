import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2>;
};

export default Heading;
