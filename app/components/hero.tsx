import Navbar from "./navbar";
import Image from "next/image";

export default function Hero(){
    return(
        <div className="Hero">
            <Navbar />
            <div className="Hero-in">
                
                <div className="HeroL">
                <h1>
                    Unwind , Play and 
                    <br />
                    Perfect Your Swing
                </h1>
                <p>
                    A championship experience awaits you on lush,
                    world-class fairways designed for golfers of
                    every level.
                </p>
                </div>
                <div className="HeroR">
                    <img src="/HeroImg.png" />
                </div>
            </div>
            <div className="HeroBtn">
                <button className="primaryBtn">Join Team</button>
                <button className="secondryBtn">Discover</button>
            </div>
        </div>
    )
}