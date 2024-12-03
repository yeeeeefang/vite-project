import axios from "axios"
import { useEffect } from "react"

import './App.css';
import { IoUmbrellaSharp } from "react-icons/io5";
import ShowCity from "./ShowCity";

function App() {

 


  return (
    <>

      <div className="weather">
        <h2>36小時天氣預報</h2>

        <div id="box1">
          <ShowCity />

          {/* {
            location.map((city) => {
              return (
                <div className="box2">
                  <h3 className='citynn'>{city.locationName}</h3>
                  <div className="content">
                    <div className="item">
                      <h4>2日</h4>
                      <p>上午6:00</p>
                      <p>~</p>
                      <p>下午6:00</p>
                      {/* <img src="./public/weatherIcon/晴時多雲.svg" alt="" /> 這是html的寫法*/}
          {/* <img src="weatherIcon/晴時多雲.svg" alt="" />
                      <p>晴時多雲</p>
                      <p><IoUmbrellaSharp />10%</p>
                    </div>
                    <div className="item">
                      <h4>2日</h4>
                      <p>上午6:00</p>
                      <p>~</p>
                      <p>下午6:00</p>
                      <img src="weatherIcon/多雲時晴.svg" alt="" />
                      <p>多雲時晴</p>
                      <p><IoUmbrellaSharp />20%</p>
                    </div>
                    <div className="item">
                      <h4>3日</h4>
                      <p>上午6:00</p>
                      <p>~</p>
                      <p>下午6:00</p>
                      <img src="weatherIcon/多雲短暫雨.svg" alt="" />
                      <p>多雲短暫雨</p>
                      <p><IoUmbrellaSharp />30%</p>
                    </div>
                  </div>
                </div> */}
          {/* )
            })
          } */}



          {/* <div className="box2">
            <h3 className='citynn'>新北市</h3>
            <div className="content">
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="weatherIcon/晴時多雲.svg" alt="" />
                <p>晴時多雲</p>
                <p><IoUmbrellaSharp />10%</p>
              </div>
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="weatherIcon/多雲時晴.svg" alt="" />
                <p>多雲時晴</p>
                <p><IoUmbrellaSharp />20%</p>
              </div>
              <div className="item">
                <h4>3日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="weatherIcon/多雲短暫雨.svg" alt="" />
                <p>多雲短暫雨</p>
                <p><IoUmbrellaSharp />30%</p>
              </div>
            </div>
          </div> */}

        </div>
      </div >
    </>
  )
}
export default App