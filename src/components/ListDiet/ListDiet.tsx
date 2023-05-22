import React from "react";
import dietDate from "../../service/list.json";
import ItemDiet from "../ItemDiet/ItemDiet";
const SectionDiet: React.FC = () => {
  console.log(dietDate.firstDiet.oneSection);
  return (
    <div>
      <ul>
        <ItemDiet date={dietDate.firstDiet.oneSection} />
        <ItemDiet date={dietDate.firstDiet.twoSection} />
        <ItemDiet date={dietDate.firstDiet.threeSection} />
      </ul>
      <ul>
        <ItemDiet date={dietDate.twoDiet.oneSection} />
        <ItemDiet date={dietDate.twoDiet.twoSection} />
        <ItemDiet date={dietDate.twoDiet.threeSection} />
        <ItemDiet date={dietDate.twoDiet.fourSection} />
      </ul>
      <ul>
        <ItemDiet date={dietDate.threeDiet.oneSection} />
        <ItemDiet date={dietDate.threeDiet.twoSection} />
        <ItemDiet date={dietDate.threeDiet.threeSection} />
      </ul>
    </div>
  );
};

export default SectionDiet;
