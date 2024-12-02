// import axios from "axios"
// import { useEffect } from "react"
import './App.css';

function App() {

  // useEffect(() => {
  //   (async () => {
  //     const data = await axios.get('./F-C0032-001-1202.json');
  //     const{location} = data.data.cwaopendata.dataset;
  //     console.log(location);
  //   })
  // }, [])



  return (
    <>
      <h2>36小時天氣預報</h2>
      <body>
        <section id="box1">
          <div><h3 className='city'>台北市</h3></div>
          <div className="content">
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
          </div>

          <div><h3 className='city'>台北市</h3></div>
          <div className="content">
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
            <div className="item">
              <h4>2日</h4>
              <p>上午6:00</p>
              <p>~</p><br />
              <img src="" alt="" />
              <p>晴時多雲</p>
              <p>100%</p>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}
export default App