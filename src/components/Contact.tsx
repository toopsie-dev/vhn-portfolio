import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import style from "../assets/styles/_contact.module.scss";

export const Contact = () => {
  return (
    <div className="background">
      <div
        className={`content-width flex-between ${style["banner-container"]}`}
      >
        <div
          className={`left-container flex-start flex-column ${style["left-container"]} `}
        >
          <h1 className="title">Contacts</h1>
          <p className="text">
            I’m seeking out opportunities to collaborate with companies /
            agencies / individuals, not just work for them. I want to bring my
            collective design experience to the table where we can work together
            to solve real business-problems in a way that optimizes all of our
            respective experience and knowledge.
          </p>
        </div>
        <div className={`right-container ${style["right-container"]} `}>
          <h4 className="text">
            Feel free to reach out through any platforms below:
          </h4>
          <ul>
            <li>
              <a href="mailto:vhinlilis07@gmail.com">
                <MdMarkEmailUnread className={style["icons"]} />
                vhinlilis07@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+6396-6690-7559">
                <FaPhone className={style["icons"]} />
                +6396-6690-7559
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/1AskYnqGJpPWnhmY7"
                target="_blank"
              >
                <FaLocationDot className={style["icons"]} />
                #48 Purok 1, Brgy. marinig Cabuyao Laguna
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
