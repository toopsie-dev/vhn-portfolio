import style from "../assets/styles/_banner.module.scss";

export const Banner = () => {
  const handleRedirect = () => {
    window.open("./CV-MelvinLilis.pdf", "_blank");
  };

  return (
    <div className="background">
      <div
        className={`content-width flex-between ${style["banner-container"]}`}
      >
        <div className="left-container flex-start flex-column">
          <h1 className="title">hi, i'm vhin.</h1>
          <p className="text">
            I create elegantly simple designs and write code passionately,
            finding joy in my work.
          </p>
          <button onClick={handleRedirect}>View CV</button>
        </div>
        <div className="right-container flex-center">
          <img src="./banner-img.png" alt="banner-img" className="banner-img" />
        </div>
      </div>
    </div>
  );
};
