import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Popular } from "../components/Popular/Popular";
import { Offers } from "../components/Offers/Offers";
import { Newcollections } from "../components/NewCollections/NewCollections";
import { Newsletter } from "../components/NewsLetter/NewsLetter";
export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollections />
      <Newsletter />
    </div>
  );
};
