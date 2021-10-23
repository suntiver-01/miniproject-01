import React from "react";
import GlobalStyle from "../globals.styled";
import Navbar from "../Navbar";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import InfoSection  from '../InfoSection';

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </React.Fragment>
  );
}
