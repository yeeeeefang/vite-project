// import axios from "axios"
// import { useEffect } from "react"

import './App.css';
import { IoUmbrellaSharp } from "react-icons/io5";

function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('https://yeeeeefang.github.io/vite-project/json/F-C0032-001.json');
      console.log(data);
    })()
  }, [])

  // useEffect(() => {
  //   (async () => {
      //     // const data = await axios.get('./F-C0032-001-1202.json');
      // const data = await axios.get('https://yeeeeefang.github.io/vite-project/json/F-C0032-001.json');
      //     const { location } = data.data.cwaopendata.dataset;
  //     console.log(data);
  //   })
  // }, [])

  return (
    <>

      <div className="weather">
        <h2>36小時天氣預報</h2>

        <section id="box1">
          <div className="box2">
            <h3 className='city'>台北市</h3>
            <div className="content">
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                <p>晴時多雲</p>
                <p><IoUmbrellaSharp />10%</p>
              </div>
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                <p>多雲時晴</p>
                <p><IoUmbrellaSharp />20%</p>
              </div>
              <div className="item">
                <h4>3日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/多雲短暫雨.svg" alt="" />
                <p>多雲短暫雨</p>
                <p><IoUmbrellaSharp />30%</p>
              </div>
            </div>
          </div>

          <div className="box2">
            <h3 className='city'>新北市</h3>
            <div className="content">
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
                <p>晴時多雲</p>
                <p><IoUmbrellaSharp />10%</p>
              </div>
              <div className="item">
                <h4>2日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/多雲時晴.svg" alt="" />
                <p>多雲時晴</p>
                <p><IoUmbrellaSharp />20%</p>
              </div>
              <div className="item">
                <h4>3日</h4>
                <p>上午6:00</p>
                <p>~</p>
                <p>下午6:00</p>
                <img src="./public/weatherIcon/多雲短暫雨.svg" alt="" />
                <p>多雲短暫雨</p>
                <p><IoUmbrellaSharp />30%</p>
              </div>
            </div>
          </div>

        </section>
      </div >
    </>
  )
}
export default App