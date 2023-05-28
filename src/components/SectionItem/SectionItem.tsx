import React from "react";

interface IProps {
  children: any;
}
const SectionItem: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SectionItem;
