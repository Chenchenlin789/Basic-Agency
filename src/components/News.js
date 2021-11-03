import video1 from "../img/Culture.mp4"
import "./News.css";
import basicNewsData from "../data/BasicNews.json"


const News = () => {
    return (
        <div className="News__background">
            <section className="container padding flow">
                <div className="flow flex">
                    <div className="fs-700" >
                        <h2 >
                            BASIC® HELPS<br /> BRANDS <br />●CONNECT <br /> W/ CULTURE
                        </h2>
                        <p> ADWEEK (AGENCY SPOTLIGHT)</p>
                        <a className="buttons flow fs-100 News__background link" href="/About">ABOUT US</a>
                    </div>

                    <iframe source src={video1}
                        width="250" height="240"
                        autoplay
                    />
                </div>

                <div className="flow padding fs-400">
                    <h2 >FEATURED </h2>
                    <h2 >NEWS </h2>
                </div>

                <div className="grid padding">
                    {basicNewsData.map((data, elt) => <div
                        key={elt}>
                        <img className="img" src={data.image} />
                        <h2> {data.title}</h2>
                        <img className="arrow" src={data.arrow} />
                        <p>{data.info}</p>
                        <p>{data.date}</p>


                    </div>)}
                </div>

                {/* <div className="flow borders">
                    <h3>BASIC® Deemed One of the World’s Fastest Growing Agencies by Adweek</h3>
                    <p>PRESS  </p>
                    <p> 09.25.19</p>
                </div>
                <div className="flow borders">
                    <h3>The Webby Awards Select BASIC® to Rethink the Future of Their Brand and Digital Platform</h3>
                    <p>WORK </p>
                    <p> 12.13.19</p>
                </div>
                <div className="flow borders">
                    <h3>BASIC® and Furrion partner to launch all new eCommerce website built for a D2C future
                    </h3>
                    <p>WORK </p>
                    <p> 08.29.19</p>
                </div> */}
            </section>

        </div >
    )
}

export default News;

