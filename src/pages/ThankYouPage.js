import React from "react";
import BouncingText from "../components/BouncingText";
import winner from "../img/winner.gif";


const ThankYouPage = () => {
    return (
        <div className="pt-6 flex flex-col">
            <div className="flex justify-center mb-2">
                <img src={winner} alt="error" />
                <img src={winner} alt="error" />
                <img src={winner} alt="error" />
            </div>
            <BouncingText className="text-xl sm:text-3xl md:text-4xl text-yellow-pure text-center text-glow my-4">
                Congratulations.
            </BouncingText>
            <h2 className="text-3xl text-center text-yellow-pure my-4">
                You have just made the best decision of your life (so far).
            </h2>
            <span className="text-xl text-center text-yellow-pure my-4">
                Check your email for the business strategies I just shared with you.
            </span>
            <div className="flex justify-center mt-2">
                <img src={winner} alt="error" />
                <img src={winner} alt="error" />
                <img src={winner} alt="error" />
            </div>
        </div>
    );
};

export default ThankYouPage;
