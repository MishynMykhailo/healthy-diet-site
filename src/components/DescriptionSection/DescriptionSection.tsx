import React from "react";
import s from "./DescriptionSection.module.css";
interface IProps {
  title: string;
  desc: string;
  children: any;
}

const DescriptionSection: React.FC<IProps> = ({ title, desc, children }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <h4 className={s.desc}>{desc}</h4>
      <div>{children}</div>
    </>
  );
};

export default DescriptionSection;
