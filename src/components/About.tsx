/* eslint-disable @typescript-eslint/no-unused-vars */
import style from "../assets/styles/_about.module.scss";

export const About = () => {
  return (
    <div className="background">
      <div className={`content-width flex-between ${style["about-container"]}`}>
        <div className="left-container flex-center flex-column">
          <img
            src="./about-img.png"
            alt="banner-img"
            className="banner-img"
            loading="lazy"
          />
        </div>
        <div className="right-container flex-start flex-column">
          <h2 className="title">about me</h2>
          <p className="text">Hi! Nice to meet you.</p>
          <p className="text">
            I graduated Bachelor of Science in Information Technology at
            Pamantasan ng Cabuyao, last 2021. I worked as a Web Developer at Go
            Crayons, a creative agency specializing in web design, UX, and
            WordPress development.
          </p>
          <p className="text">
            My passion is coding and online gaming. I used to experiment with
            things and work on my projects as a hobby. I often watch video
            tutorials to help in enhancing my knowledge in the world of Web and
            System Development.
          </p>
        </div>
      </div>
    </div>
  );
};
