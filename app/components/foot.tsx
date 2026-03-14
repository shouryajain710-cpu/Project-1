import Socials from "./Socials";

export default function Footer(){
    return(
        <footer>
            <div>
                <h1>Ready to built and compete <br />
                    Let's Learn Further
                </h1>
                <br /><hr />
                <p>Copyright @ ...</p>
            </div>
            <div className="foot-socials">
                <Socials />
            </div>
        </footer>
    )
}