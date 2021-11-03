import "./Footer.css"

const Footer = () => {
    return (
        <div className="flex footer__background padding footer__padding">
            <section className="footer__left">
                <h2>B®</h2>
                <p> ●STAY IN THE KNOW</p>
                <p className="line"> Email Address</p>
            </section>

            <section className="footer__left">
                <h3 >We collaborate with ambitious
                    brands and people. Let’s connect :)</h3>

                <div className="flex flow">
                    <div>
                        <p>●Social</p>
                        <p>Instagram </p>
                        <p>Twitter</p>
                        <p>Linkedin</p>
                        <p>Facebook</p>
                    </div>
                    <div>
                        <p>●INITIATIVES</p>
                        <p>Crafted </p>
                        <p>Culture Manual</p>
                        <p>Brandbeats</p>
                        <p>Moves</p>
                    </div>
                    <div>
                        <p>●OFFICES</p>
                        <p>San Diego – CA</p>
                        <p>Bay Area – CA</p>
                        <p>St. Louis – MO</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Footer;