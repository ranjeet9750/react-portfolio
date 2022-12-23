import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetu r</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
