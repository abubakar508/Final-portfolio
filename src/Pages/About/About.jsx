import React, { useState, useEffect } from "react";
import "./About.css";
import { AiFillHtml5, AiFillAccountBook } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiSolidity,
  SiEthereum,
  SiMicrosoftaccess,
  SiQuickbooks,
  SiMicrosoftsqlserver,
  SiMysql,
  SiWeb3Dotjs,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandThreejs,
  TbBrandFramerMotion,
  TbSql,
} from "react-icons/tb";
import { BiLogoVuejs, BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { DiSqllite } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";

export const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 25) {
        setCount(count + 1);
      }
    }, 40); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [count]);

  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 16) {
        setCount1(count1 + 1);
      }
    }, 40); // Change the interval time as needed

    return () => clearInterval(interval1);
  }, [count1]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (count2 < 4) {
        setCount2(count1 + 1);
      }
    }, 10); // Change the interval time as needed

    return () => clearInterval(interval2);
  });

  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval3 = setInterval(() => {
      if (count3 < 14) {
        setCount3(count1 + 1);
      }
    }, 10);

    return () => clearInterval(interval3);
  });
  const [clicked, setClicked] = useState(false) ;
  const click = () => {
    setClicked(true);
  };
  const notClick = () => {
    setClicked(false);
  };

  const [clicked1, setClicked1] = useState(false) ;
  const click1 = () => {
    setClicked1(true);
  };
  const notClick1 = () => {
    setClicked1(false);
  };

  return (
    <div>
        <div className="about-flex">
      <section className="about">
        <div className="about-content">
          <h1 className="title">
            About<span>.</span>
          </h1>
          <div className="about-header">
            <h2>
              Progress is only <span>Captivating</span> <br /> when seen in
              action.
            </h2>
            <div className="small-1">
              <small>
                8 years ago, Curiosity aroused on how websites are built and how
                design is managed in website, including eneabling interactivity
                in websites. And throught that curiosity, my passion for website
                development had delved deeper into understanding the crucial
                steps of it.
              </small>
            </div>
            <div className="exp">
              <div className="exp-section">
                <h1>0{count2}+</h1>
                <div className="add-text-abt">
                  <small>Years of experience</small>
                </div>
              </div>
              <div className="exp-section">
                <h1>0{count1}+</h1>
                <div className="add-text-abt">
                  {" "}
                  <small>Satisfied <br /> Clients</small>
                </div>
              </div>
              <div className="exp-section">
                <h1>0{count}+</h1>
                <div className="add-text-abt">
                  {" "}
                  <small>Finished projects</small>
                </div>
              </div>
              <div className="exp-section">
                <h1>{count3}</h1>
                <div className="add-text-abt">
                  <small>Scripted Plays</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="skill">
<div className="skill-headers">
        <li >Skill</li>
        <section className="Skillrank">
        <div className="skill-rank-cont">
          <div className="skill-rank-item">
            <span>
              Web Development :
              <div className="abt-skll-icon">
              <AiFillHtml5 className="skill-icons" />{" "}
              <SiCss3 className="skill-icons" />{" "}
              <SiJavascript className="skill-icons" />
              <DiJavascript className="skill-icons" />
              <SiTailwindcss className="skill-icons" />
              <SiReact className="skill-icons" />{" "}
              <TbBrandNextjs className="skill-icons" />{" "}
              <BiLogoVuejs className="skill-icons" />{" "}
              <TbBrandThreejs className="skill-icons" />
              <TbBrandFramerMotion className="skill-icons" />
              </div>
            </span>
            <div className="skills-bar" title="85%"></div>
          </div>

          <div className="skill-rank-item">
            <span>
              UI/UX Design :
              <BiLogoFigma className="skill-icons" />
            </span>
            <div className="skills-bar-1" title="92%"></div>
            <div className="skill-rank-item">
              <span>
                Backend :<IoLogoNodejs className="skill-icons" />
              </span>
              <div className="skills-bar-4" title="50%"></div>
            </div>
          </div>
          <div className="skill-rank-item">
            <span>
              Blockchain Development :
              <SiSolidity className="skill-icons" />{" "}
              <SiEthereum className="skill-icons" />
            </span>
            <div className="skills-bar-2" title="70%"></div>
          </div>
          <div className="skill-rank-item">
            <span>
              Accounting & Finance :
              <div className="act-fin">
              <AiFillAccountBook className="skill-icons" />{" "}
              <PiMicrosoftExcelLogoFill className="skill-icons" />
              <SiMicrosoftaccess className="skill-icons" />
              <SiQuickbooks className="skill-icons" />
              </div>
            </span>
            <div className="skills-bar-3" title="99%"></div>
          </div>

          <div className="skill-rank-item">
            <span>
                
              Database :
              <div className="data-base">
              <TbSql className="skill-icons" /> :{" "}
              <SiMicrosoftsqlserver className="skill-icons" />{" "}
              <SiMysql className="skill-icons" />{" "}
              <BiLogoPostgresql className="skill-icons" />{" "}
              <DiSqllite className="skill-icons" />
              </div>
            </span>
            <div className="skills-bar-5" title="39%"></div>
          </div>
          <div className="skill-rank-item">
            <span>
              WEB3 :<SiWeb3Dotjs className="skill-icons"/>
            </span>
            <div className="skills-bar-6" title="40%"></div>
          </div>
        </div>
      </section>
</div>




   
      </div>
    </div>
    </div>
  );
};