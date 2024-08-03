import React from "react";
import "./InfoPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import img4 from "../images/image4.png";

const InfoPage = () => {
  return (
    <div className="info-page">
      <h1 className="title">Features</h1>
      <p className="decription">
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="info-columns">
        <div className="info-column">
          <div className="info-section">
            <img src={img1} alt="Image 1" className="info-image" />
            <div className="info-content">
              <h2 className="info-subtitle">Search Data</h2>
              <p className="info-text">
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <div className="learn-more">
                <a href="">Learn more <FontAwesomeIcon icon={faArrowRight} style={{color: "purple"}}/></a>
              </div>
            </div>
          </div>
          <div className="info-section">
            <img src={img2} alt="Image 2" className="info-image" />
            <div className="info-content">
              <h2 className="info-subtitle">24 Hours Access</h2>
              <p className="info-text">
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
              <div className="learn-more">
                <a href="">Learn more <FontAwesomeIcon icon={faArrowRight} style={{color: "purple"}}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="info-column">
          <div className="info-section">
            <img src={img3} alt="Image 3" className="info-image" />
            <div className="info-content">
              <h2 className="info-subtitle">Print Out</h2>
              <p className="info-text">
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
              <div className="learn-more">
                <a href="">Learn more <FontAwesomeIcon icon={faArrowRight} style={{color: "purple"}} /></a>
              </div>
            </div>
          </div>
          <div className="info-section">
            <img src={img4} alt="Image 4" className="info-image" />
            <div className="info-content">
              <h2 className="info-subtitle">Security Code</h2>
              <p className="info-text">
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
              <div className="learn-more">
                <a href="">Learn more <FontAwesomeIcon icon={faArrowRight} style={{color: "purple"}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
