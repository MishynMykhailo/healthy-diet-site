import React from "react";
import ItemDiet from "../ItemDiet/ItemDiet";
import s from "./ListDiet.module.css";
import dietDate from "../../service/list.json";
import DescriptionSection from "../DescriptionSection/DescriptionSection";

const SectionDiet: React.FC = () => {
  return (
    <div>
      <DescriptionSection title={"Сніданок"} desc={"Перший прійом"}>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.firstDiet.oneSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.firstDiet.twoSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.firstDiet.threeSection} />
        </ul>
      </DescriptionSection>
      <DescriptionSection title={"Обід"} desc={"Другий прійом"}>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.twoDiet.oneSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.twoDiet.twoSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.twoDiet.threeSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.twoDiet.fourSection} />
        </ul>
      </DescriptionSection>
      <DescriptionSection title={"Перекус"} desc={"Третій прийом"}>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.threeDiet.oneSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.threeDiet.twoSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.threeDiet.threeSection} />
        </ul>
      </DescriptionSection>
      <DescriptionSection title={"Вечеря"} desc={"Четвертий прийом"}>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.fourDiet.oneSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.fourDiet.twoSection} />
        </ul>
        <ul className={s.ul}>
          <ItemDiet date={dietDate.fourDiet.threeSection} />
        </ul>
      </DescriptionSection>
    </div>
  );
};

export default SectionDiet;
