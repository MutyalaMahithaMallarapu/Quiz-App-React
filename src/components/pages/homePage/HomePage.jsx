import React from "react";
import '../../styleSheet/StyleSheet.css'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClickStart = () => {
        navigate('/quiz');
    }
    return (
        <div className="quizStyle">
            <div className="quizBlock">
                <div className="homeStyle">
                    <h1 className="headerHome"> Engage, learn, and challenge </h1>
                    <h1 className="headerHome"> with our interactive React quiz app!</h1>
                    {/* <h3> Click on the below start button to start the Quiz </h3> */}
                    <button className="tryAgainBtn" onClick={handleOnClickStart}> <b> Start </b></button>
                </div>
                {/* <QuizPage /> */}
            </div>
        </div>
    )
}
export default HomePage