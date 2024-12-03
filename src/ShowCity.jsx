import { IoUmbrellaSharp } from "react-icons/io5";
import axios from "axios"
function ShowCity() {
    // useEffect(() => {
        // (async () => {
            // const data = await axios.get('./F-C0032-001-1202.json');
            // const data = await axios.get('https://yeeeeefang.github.io/vite-project/json/F-C0032-001.json');
            // console.log(data);
            // const { location } = data.data.cwaopendata.dataset;


            //locationName =>縣市名
            // elementName => Wx=>天氣概況
            // elementName =>PoP =>降雨機率




        // })()//()=>立即執行的意思
    // }, [])


    return (
        <>
            {(async () => {
                // const data = await axios.get('./F-C0032-001-1202.json');
                const data = await axios.get('https://yeeeeefang.github.io/vite-project/json/F-C0032-001.json');
                // console.log(data);
                const { location } = data.data.cwaopendata.dataset;

                
                    location.map((city) => {
                        return <div key={city.locationName}>{city.locationName}</div>
                    })
            

                //locationName =>縣市名
                // elementName => Wx=>天氣概況
                // elementName =>PoP =>降雨機率




            })()}


            <div className="box2">
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
            </div>
        </>
    )
}
export default ShowCity