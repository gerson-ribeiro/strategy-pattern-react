import { FC } from "react";
import { Section } from "./styles";

interface IWrapperProps {
  children?: any;
  [key: string]: any;
}

const Wrapper: React.FC<IWrapperProps> = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>;
};

export default Wrapper;
