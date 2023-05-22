import React from "react";
interface IProps {
  children: any;
}
const Main: React.FC<IProps> = (IProps) => {
  return <main>{IProps.children}</main>;
};

export default Main;
