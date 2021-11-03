import "./Home.css";
import video from "../img/Hero.mp4";
import google from "../icons/google-dark.svg"
import patagonia from "../icons/patagonia-dark.svg"
import airbnb from "../icons/airbnb-dark.svg"
import herman from "../icons/herman-miller-resized.svg"
import under from "../icons/under-armour-dark.svg"
import News from "../components/News"


const Home = () => {
    return (
        <div>
            <div className="container">
                <section>
                    <h1 >WHAT'S NEXT</h1>
                    <h1 >STARTS</h1>
                    <h1 className="Home__Headline">●HERE</h1>
                </section>


                <iframe source src={video}
                    width="1150" height="640"
                    autoplay
                />

                {/* see the work section */}
                <p className="borders fs-100">STRATEGY, DESIGN, TECHNOLOGY</p>
                <div className="Home__Work flex flow">
                    <h2>BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</h2>
                    <h2 className="fs-1000 "> B®</h2>
                </div>
                <a className="buttons fs-100" href="/work">SEE THE WORK</a>

                <section className="borders flow">
                    <h2 className="flow fs-400">FEATURED <br></br> ENGAGEMENTS</h2>

                </section>

                {/* horizontal Scroll */}
                <section className="xSnap">
                    <figure>
                        <img className="flow" src={google} alt="" width="50" height="40" />
                        <p className="flow">GOOGLE</p>
                        <p className="borders">Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.</p>
                    </figure>
                    <figure>
                        <img src={patagonia} alt="" width="50" height="40" />
                        <p className="flow">PATAGONIA</p>
                        <p className="borders">Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.</p>
                    </figure>
                    <figure>
                        <img src={airbnb} alt="" width="50" height="40" />
                        <p className="flow">AIRBNB</p>
                        <p className="borders">Helping the world’s leading peer-to-peer hospitality company with creative vision, experience strategy, and execution in partnership with various departments and divisions internally at Airbnb.</p>
                    </figure>
                    <figure>
                        <img src={herman} alt="" width="50" height="40" />
                        <p className="flow">HERMAN MILLER</p>
                        <p className="borders">A collaborative and performance incentivized partnership with our teams working side by side to reimagine the digital shopping experiences for Herman Miller, Design Within Reach, and Hay.</p>
                    </figure>
                    <figure>
                        <img src={under} alt="" width="50" height="40" />
                        <p className="flow">UNDER ARMOUR</p>
                        <p className="borders">Strategy, design, and development to differentiate the iconic brand’s direct-to-consumer experience through an all new omnichannel approach, global eCommerce </p>
                    </figure>
                </section>
            </div>

            <News />


        </div >
    );
}

export default Home;