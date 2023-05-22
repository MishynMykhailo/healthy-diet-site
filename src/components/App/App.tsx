import React from "react";
import Main from "../Main/Main";
import SectionDiet from "../ListDiet/ListDiet";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Main>
          <SectionDiet />
        </Main>
        <Footer />
      </div>
    </>
  );
};

export default App;
