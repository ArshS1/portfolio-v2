import React from "react";
import senghNft from "../public/assets/projectShots/senghNft.png";
import asLearn from "../public/assets/projectShots/asLearn.png";
import inotez from "../public/assets/projectShots/iNotez.png";
import sqlearn from "../public/assets/projectShots/sqlearn.png"
import discordBot from "../public/assets/projectShots/discordBot.png"
import rockPaperScissor from "../public/assets/projectShots/rockPaperScissor.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="work" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-3xl tracking-widest uppercase text-[#f76c6c] mt-10">
          Work
        </p>
        <h2 className="py-4">Below are some things I've worked on</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sengh Nft"
            background={senghNft}
            projectLink="https://github.com/ArshS1/sengh-nft"
            shortDesc="NextJS, React"
          />
          <ProjectItem
            title="SQLearn"
            background={sqlearn}
            projectLink="https://github.com/ArshS1/SQLearn"
            shortDesc="Python, Pandas, Streamlilt, SQL"
          />
          <ProjectItem
            title="Arsh Bot"
            background={discordBot}
            projectLink="https://arsh-bot.vercel.app/"
            shortDesc="React, Python, AWS DynamoDB"
          />
          <ProjectItem
            title="iNotez"
            background={inotez}
            projectLink="https://github.com/ArshS1/iNotez"
            shortDesc="MongoDB, Express, React, Node"
          />
          <ProjectItem
            title="Rock Paper Scissor"
            background={rockPaperScissor}
            projectLink="https://github.com/ArshS1/rock_paper_scissor"
            shortDesc="Python (tkinter)"
          />
          <ProjectItem
            title="ASLearn"
            background={asLearn}
            projectLink="https://github.com/ArshS1/ASLearn"
            shortDesc="HTML/CSS, JS"
          />
        </div>
      </div>
    </div>
  ); 
};

export default Projects;
