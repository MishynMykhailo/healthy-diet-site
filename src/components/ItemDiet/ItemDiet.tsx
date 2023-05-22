import React from "react";
import s from "./ItemDiet.module.css";

interface IProps {
  date: Array<{ id: string; food: string; weight: string }>;
}

const ItemDiet: React.FC<IProps> = ({ date }) => {
  return (
    <>
      {date.map(({ id, food, weight }) => (
        <li className={s.li} key={id}>
          <input className={s.input} id={id} type="checkbox" />
          <label htmlFor={id}>
            <p className={s.p}>{food}</p>
            <p className={s.p}>{weight}</p>
          </label>
        </li>
      ))}
    </>
  );
};

export default ItemDiet;
