import React, { useState } from "react";
import './QuizPage.css';
import data from '../../../data/quizData.json'

const QuizPage = () => {

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)

    console.log(currentQuestionNumber, data.quizData.length)
    const handleOnClickNext = () => {
        if (currentQuestionNumber <= data?.quizData?.length - 2) {
            setCurrentQuestionNumber(currentQuestionNumber + 1)
        }
        else {
            alert(" you have reached end of the question ")
        }
    }

    const handleOnClickPrev = () => {
        if (currentQuestionNumber > 0) {
            setCurrentQuestionNumber(currentQuestionNumber - 1)
        }
    }

    return (
        <div className="quizStyle">
            <div className="quizBlock">
                <h1 className="header"> React Quiz </h1>
                <div className="questionBlock">
                    <div className="question">
                        {currentQuestionNumber + 1}. {data?.quizData[currentQuestionNumber]?.question}
                    </div>
                    <div>
                        {data && data?.quizData[currentQuestionNumber]?.options.map((item) => {
                            return (
                                <div className="radioOptions">
                                    <input type="radio" name="radio" value="item" key="item" />
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
            </div>
        </div>
    )

}

export default QuizPage