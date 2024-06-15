import React from "react";
import styles from "../../app/contants/styles";
import TitleText from "./TitleText";
import { cardsInfo } from "@/app/contants/data";
import ExploreCard from "@/components/home/ExploreCard";

const Explore = () => {
  return (
    <section className="px-6 py-10">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TitleText
          title={
            <span className="text-gray-900 font-extrabold">Why Carent ?</span>
          }
        />
        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {cardsInfo?.map((info, idx) => {
            return <ExploreCard key={idx} info={info} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Explore;
