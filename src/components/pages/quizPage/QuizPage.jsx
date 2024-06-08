import React, { useState } from "react";
import '../../styleSheet/StyleSheet.css';
import data from '../../../data/quizData.json'
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [userSelected, setUserSelected] = useState(false)
    const [reachedMaxQuestions, setReachedMaxQuestions] = useState(false)
    const navigate = useNavigate();
    console.log(currentQuestionNumber, data.quizData.length)
    const handleOnClickNext = () => {
        if (!userSelected) {
            alert("Please select any option and click on Next")
        }
        else if (currentQuestionNumber <= data?.quizData?.length - 2) {
            setCurrentQuestionNumber(currentQuestionNumber + 1)
            setUserSelected(false)
        }
        else {
            if (userSelected) {
                setReachedMaxQuestions(true)
                alert(" You have Reached the end of the Quiz, click Ok to view Score ")
            }
        }
    }

    const handleOnClickPrev = () => {
        if (currentQuestionNumber > 0) {
            setCurrentQuestionNumber(currentQuestionNumber - 1)
        }
    }

    const handleOnClickTryAgain = () => {
        navigate('/');
    }

    const handleOptionChange = (event) => {
        console.log(event.target.value)
        if (event.target.value === data?.quizData[currentQuestionNumber]?.answer) {
            setScore(score + 1)
        }
        if (event.target.value) {
            setUserSelected(true)
        }

    }

    return (
        <div className="quizStyle">
            <div className="quizBlock">
                <h1 className="header"> React Quiz </h1>

                {!reachedMaxQuestions ? (
                    <div className="questionBlock">
                        <div className="question">
                            {currentQuestionNumber + 1}. {data?.quizData[currentQuestionNumber]?.question}
                        </div>
                        <div>
                            {data && data?.quizData[currentQuestionNumber]?.options.map((item) => {
                                return (
                                    <div className="radioOptions">
                                        <input type="radio" name="radio" value={item} key={item} onChange={handleOptionChange} />
                                        {item}
                                    </div>
                                )
                            })
                            }
                        </div>
                        <div className="btnStyle">
                            <button className="nextBtn" onClick={handleOnClickPrev}> <b> Prev </b></button>
                            <button className="nextBtn" onClick={handleOnClickNext}> <b> Next</b> </button>
                        </div>

                    </div>
                ) : (
                    <div className="results">
                        <div className="score"> <b>Total Score : {score}</b> </div>
                        <div className="score"><b> Total Questions : {data?.quizData?.length} </b></div>
                        <div className="btnStyle">
                            <button className="tryAgainBtn" onClick={handleOnClickTryAgain}> <b> Try Again </b></button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )

}

export default QuizPage