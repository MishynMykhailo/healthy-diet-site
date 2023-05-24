import React, { useState } from "react";
import s from "./ItemDiet.module.css";

interface IProps {
  date: Array<{ id: string; food: string; weight: string }>;
}

const ItemDiet: React.FC<IProps> = ({ date }) => {
  const [selectId, setSelectId] = useState("");

  const handleCheckboxChange = (id: string): void => {
    setSelectId((prevState) => {
      if (prevState === id) {
        return "";
      }
      return id;
    });
  };

  return (
    <>
      {date.map(({ id, food, weight }) => (
        <li className={s.li} key={id}>
          <input
            className={s.input}
            id={id}
            type="checkbox"
            onChange={() => handleCheckboxChange(id)}
            checked={selectId === id && selectId.length > 0}
            disabled={selectId !== id && selectId.length > 0}
          />
          <label
            className={s.label}
            htmlFor={id}
            style={
              selectId !== id && selectId.length > 0
                ? {
                    textDecoration: "line-through",
                    opacity: "50%",
                    textDecorationThickness: "1px",
                  }
                : { opacity: "100%" }
            }
          >
            <p className={s.weight}>
              {weight} {food}
            </p>
            <p className={s.food}></p>
          </label>
        </li>
      ))}
    </>
  );
};

export default ItemDiet;
