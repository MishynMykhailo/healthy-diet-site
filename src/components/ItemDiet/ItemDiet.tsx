import React, { useState, useEffect, useCallback } from "react";
import s from "./ItemDiet.module.css";

interface IProps {
  date: Array<{ id: string; food: string; weight: string }>;
}

const ItemDiet: React.FC<IProps> = ({ date }) => {
  const [selectId, setSelectId] = useState<string[]>([]);

  const handleCheckboxChange = (id: string): void => {
    setSelectId((prevIds) => {
      if (prevIds.includes(id)) {
        const updatedIds = prevIds.filter((prevId) => prevId !== id);
        localStorage.removeItem(`selectId_${id}`);
        return updatedIds;
      } else {
        const updatedIds = [...prevIds, id];
        localStorage.setItem(`selectId_${id}`, "true");
        return updatedIds;
      }
    });
  };

  useEffect(() => {
    const storedIds: string[] = [];
    date.forEach(({ id }) => {
      const localData = localStorage.getItem(`selectId_${id}`);
      if (localData === "true") {
        storedIds.push(id);
      }
    });
    setSelectId(storedIds);
  }, [date]);

  useEffect(() => {
    selectId.forEach((id) => {
      localStorage.setItem(`selectId_${id}`, "true");
    });
  }, [selectId]);

  const clearLocalStorage = useCallback(() => {
    selectId.forEach((id) => {
      localStorage.removeItem(`selectId_${id}`);
    });
  }, [selectId]);

  useEffect(() => {
    const midnightTime = getMidnightTime();
    const timeUntilMidnight = midnightTime - Date.now();

    const timeoutId = setTimeout(() => {
      clearLocalStorage();
    }, timeUntilMidnight);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [clearLocalStorage]);

  const getMidnightTime = () => {
    const currentDate = new Date();
    const tomorrowDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    );
    tomorrowDate.setHours(0, 0, 0, 0);
    return tomorrowDate.getTime();
  };

  return (
    <>
      {date.map(({ id, food, weight }) => {
        const isChecked = selectId.includes(id);
        const isDisabled = selectId.length > 0 && !isChecked;
        const liStyle = isDisabled
          ? {
              textDecoration: "line-through",
              opacity: "50%",
              textDecorationThickness: "1px",
            }
          : { opacity: "100%" };

        return (
          <li className={s.li} key={id}>
            <input
              className={s.input}
              id={id}
              type="checkbox"
              onChange={() => handleCheckboxChange(id)}
              checked={isChecked}
              disabled={isDisabled}
            />
            <label className={s.label} htmlFor={id} style={liStyle}>
              <p className={s.weight}>
                {weight} {food}
              </p>
              <p className={s.food}></p>
            </label>
          </li>
        );
      })}
    </>
  );
};

export default ItemDiet;
