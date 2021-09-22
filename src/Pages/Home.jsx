import React from "react"
import Header from "../Components/Header";
import Apresentation from "../Components/Apresentation";
import About from "../Components/About";
import Topics from "../Components/Topics";

function Home() {
  return(
    <div>
      <Header />
      <div style={{ height: '10vh' }} /> { /* Div colocada para compensar o tamanho do header por ele ser fixed */ }
      <Apresentation />
      <About />
      <Topics />
    </div>
  );
}

export default Home;