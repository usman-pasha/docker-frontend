import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/banner.css";
import * as config from "../config/index";

const Banner = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.APIURI}/banner`);
        const data = response.data;
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="banner-title">Banner Data</h2>
      {apiData && (
        <div>
          {apiData.data.map((element, index) => (
            <div key={index} className="banner-container">
              <p className="banner-text">Banner Name: {element.bannerName}</p>
              <img
                className="bannerPicture"
                src={`${config.APIURI}/images/${element.bannerPicture}`}
                alt={`Banner ${index}`}
              />
              <p className="banner-copyright">
                Copy Right: {element.copyRight}
              </p>
              <img
                className="bannerCover"
                src={`${config.APIURI}/images/${element.bannerCover}`}
                alt={`Banner ${index}`}
              />
            </div>
          ))}
          {console.log(apiData.totals)}
          {<h2>Totals Counts:{apiData.totals.count}</h2>}
        </div>
      )}
    </div>
  );
};

export default Banner;
