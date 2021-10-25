// import Hero from "../components/Hero";
import video from "../img/Hero.mp4";


const Home = () => {
    return (
        <div >

            <section>
                <h1>WHAT'S NEXT</h1>
                <h1>STARTS</h1>
                <h1>●HERE</h1>
            </section>


            <video width="400" height="240" autoplay>
                <source src={video} type="video/mp4" />
            </video>

            <p className="borders fs-100">STRATEGY, DESIGN, TECHNOLOGY</p>
            <div className="flex flow">
                <h2>BASIC® is a branding and digital design agency building products, services, and ecommerce experiences that turn cultural values into company value.</h2>
                <h2> B®</h2>
            </div>
            <a className="buttons fs-100" href="/work">SEE THE WORK</a>

            <section className="borders flow">
                <h2 className="flow fs-400">FEATURED <br></br> ENGAGEMENTS</h2>
                <h3 className="flow">Google Store</h3>
            </section>
            <section className="xSnap">
                <figure>
                    <p>GOOGLE</p>
                    <p className="borders">Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions.</p>
                </figure>
                <figure>
                    <h3>PATAGONIA</h3>
                    <p>PATAGONIA</p>
                    <p className="borders">Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms.</p>
                </figure>
                <h3>AIRBNB</h3>
                <p>AIRBNB</p>
                <p className="borders">Helping the world’s leading peer-to-peer hospitality company with creative vision, experience strategy, and execution in partnership with various departments and divisions internally at Airbnb.</p>
                <h3>HERMAN MILLER</h3>
                <p>HERMAN MILLER</p>
                <p className="borders">A collaborative and performance incentivized partnership with our teams working side by side to reimagine the digital shopping experiences for Herman Miller, Design Within Reach, and Hay.</p>
                <h3>UNDER ARMOUR</h3>
                <p>UNDER ARMOUR</p>
                <p className="borders">Strategy, design, and development to differentiate the iconic brand’s direct-to-consumer experience through an all new omnichannel approach, global eCommerce </p>
            </section>
            <section className="flow">
                <h2>
                    BASIC® HELPS BRANDS ●CONNECT <br /> W/ CULTURE
                </h2>
                <p> ADWEEK (AGENCY SPOTLIGHT)</p>
                <a className="buttons fs-100" href="/About">ABOUT US</a>
            </section>

            <div className="flow">
                <h2 >FEATURED </h2>
                <h2 >NEWS </h2>
            </div>
            <section className="borders">
                <h3>BASIC® Deemed One of the World’s Fastest Growing Agencies by Adweek</h3>
                <p>PRESS  </p>
                <p> 09.25.19</p>
            </section>
            <section className="borders">
                <h3>The Webby Awards Select BASIC® to Rethink the Future of Their Brand and Digital Platform</h3>
                <p>WORK </p>
                <p> 12.13.19</p>
            </section>
            <section className="borders">
                <h3>BASIC® and Furrion partner to launch all new eCommerce website built for a D2C future
                </h3>
                <p>WORK </p>
                <p> 08.29.19</p>
            </section>

        </div >
    );
}

export default Home;