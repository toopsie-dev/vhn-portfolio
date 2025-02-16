import { motion } from "framer-motion";
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import style from "../assets/styles/_seminar.module.scss";
import { SeminarType } from "../types";
import { SeminarCard } from "./seminar/SeminarCard";

export const Seminars = () => {
  const seminars: SeminarType[] = [
    {
      img_url: "/certificates/introduction-css.png",
      title: "Introduction to CSS",
      description:
        "Fundamental technology used to style and format the layout of web pages. It works alongside HTML and JavaScript to create visually appealing and interactive web experiences.",
      implemented: "TESDA",
    },
    {
      img_url: "/certificates/modern-web-framework.png",
      title: "Model Web Framework 2021",
      description:
        "The choice of web framework in 2021 largely depended on factors such as programming language preference, project requirements, and development philosophy.",
      implemented: "Pamantasan ng Cabuyao",
    },
    {
      img_url: "/certificates/mvc.png",
      title: "ASP.NET Model-View-Controller",
      description:
        "Web application framework developed by Microsoft that follows the MVC architectural pattern. It provides a structured approach to building dynamic web applications by separating the application's concerns into three main components: Model, View, and Controller.",
      implemented: "Pamantasan ng Cabuyao",
    },
    {
      img_url: "/certificates/cryptocurrency.png",
      title: "Cryptocurrency as Digital Assets",
      description:
        "Cryptocurrencies share many characteristics with traditional financial assets, but their digital nature, decentralized operation, and unique properties make them a distinct category of digital assets in the modern financial landscape.",
      implemented: "Pamantasan ng Cabuyao",
    },
    {
      img_url: "/certificates/setting-up-computer-service.png",
      title: "Setting Up Computer Server",
      description:
        "Setting up a computer server can vary depending on your specific requirements, whether it's for hosting websites, applications, files, or providing network services. Here's a general guide to help you get started.		",
      implemented: "TESDA",
    },
    {
      img_url: "/certificates/smart-android.png",
      title: "SMART Android Mobile Apps Development for Begginers",
      description:
        "Developing Android apps using the SMART approach can be a great way for beginners to get started. SMART stands for Simple, Measurable, Achievable, Relevant, and Time-bound, providing a structured approach to app development. Here's a beginner-friendly guide to SMART Android app development.		",
      implemented: "TESDA",
    },
  ];

  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="background">
      <div
        className={`content-width ${
          isGridView ? style["grid-view"] : style["list-view"]
        }`}
      >
        <div className={`flex-between ${style["title-container"]}`}>
          <h2 className="text title">Seminars</h2>
          <div className={style["view-container"]}>
            {isGridView ? (
              <FaThList
                className={style["icon"]}
                onClick={() => setIsGridView(false)}
              />
            ) : (
              <BsFillGrid3X3GapFill
                className={style["icon"]}
                onClick={() => setIsGridView(true)}
              />
            )}
          </div>
        </div>
        <div className={`flex-between ${style["content-container"]}`}>
          {seminars.map((seminar: SeminarType, index: number) => (
            <motion.div
              key={`${isGridView ? "grid" : "list"}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              className={style["card-container"]}
            >
              <SeminarCard seminar={seminar} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
