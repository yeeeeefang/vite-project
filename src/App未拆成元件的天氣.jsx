import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import { IoUmbrellaSharp } from "react-icons/io5";

function App() {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    (async () => {
      //本地端要在web-server伺服器下才可以執行
      const data = await axios.get("./json/F-C0032-001.json");
      // const data = await axios.get(
      //   "https://yeeeeefang.github.io/vite-project/json/F-C0032-001.json"
      // );
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      setWeatherList(location);
      console.log(location);

      // locationName =>縣市名
      // elementName => Wx=>天氣概況
      // elementName =>PoP =>降雨機率
    })(); //()=>立即執行的意思
  }, []);

  return (
    <>
      <div className="weather">
        <h2>36小時天氣預報</h2>
        <div className="container">
          {weatherList.map((city) => {
            return (
              <div className="item" key={city.locationName}>
                <h3>{city.locationName}</h3>
                <div className="content">
                  {/* 每個縣市有三筆資料要跑迴圈 */}
                  {city.weatherElement[0].time.map((time, index) => {
                    return (
                      <div className="item2" key={index}>
                        {/* <p>{new Date(city.weatherElement[0].time[0].startTime).toLocaleString(undefined,{
                      day:'numeric'
                    })}</p>{/* 顯示時間 */}
                        <p>
                          {new Date(time.startTime).toLocaleString(undefined, {
                            day: "numeric",
                          })}
                        </p>
                        {/* 顯示日期 */}

                        <p>
                          {new Date(time.startTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric",
                          })}
                          <br />~<br />
                          {new Date(time.endTime).toLocaleString(undefined, {
                            hour: "numeric",
                            minute: "numeric",
                          })}
                        </p>
                        {/* 顯示時間 */}
                        <p>
                          <img src={`./weatherIcon/${time.parameter.parameterName}.svg` }alt="" />
                        </p>{/* 圖片 */}
                        <p>{time.parameter.parameterName}</p>
                        {/* 天氣圖名稱 */}
                        <p>
                          <IoUmbrellaSharp />
                          {
                            city.weatherElement[4].time[index].parameter.parameterName
                          }%
                        </p>
                        {/* 降雨機率 */}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
