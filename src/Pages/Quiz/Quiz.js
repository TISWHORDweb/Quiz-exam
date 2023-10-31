import React, { useState, useEffect } from "react";
import Img1 from '../../Assets/img/feature-graphic.png'
import { Volunteer } from './Questionas'
import { useNavigate } from "react-router-dom";



const Quiz = () => {
    const [questionsData, setQuestionsData] = useState([
        {
            question: 'What is your favorite color?',
            answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
            correctAnswer: "answer2"
        },
        {
            question: 'What is your favorite animal1?',
            answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
            correctAnswer: "answer1"
        },
        {
            question: 'What is your favorite animal2?',
            answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
            correctAnswer: "answer2"
        },
        {
            question: 'What is your favorite animal3?',
            answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
            correctAnswer: "answer4"
        },
        {
            question: 'What is your favorite animal4?',
            answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
            correctAnswer: "answer3"
        },
    ]);

    const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(null));
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10); // 5 minutes in seconds
    const navigate = useNavigate();

    const navigateDone = () => {
        // 👇️ navigate to /contacts
        navigate('/done');
      };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                // Perform any actions needed when the timer ends
                clearInterval(timer);
                await calculateScore();
                navigateDone()
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, score]);

    // await console.log(score)

    const handleAnswerClick = (questionIndex, answerIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[questionIndex] = answerIndex;
        setUserAnswers(newAnswers);
    };

    const calculateScore = () => {
        let newScore = 0;
        userAnswers.forEach((userAnswer, index) => {
            const correctAnswerIndex = parseInt(questionsData[index].correctAnswer.substr(-1), 10) - 1;
            if (userAnswer === correctAnswerIndex) {
                newScore += 10;
                localStorage.setItem('score', JSON.stringify(newScore));
            }
        });
        setScore(newScore);

        navigateDone()
    };

    return (
        <div>
            <div>
                <div class="quiz">
                    <div class="col-md-12">
                        <div class="nav">
                            <h2> <span id="schooly">Emmanuel</span></h2>
                            <h3><span id="namy">Rework</span></h3>
                            <div class="">
                                <p>Elasped Time</p>
                                <div class="time">
                                    <h2 id="time">{formatTime(timeLeft)}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="container ">
                                <div class="m-5" id="par">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <center class="center">
                                                    {questionsData.map((question, questionIndex) => (
                                                        <div key={questionIndex}>
                                                            <h3> {questionIndex + 1}. {question.question}</h3>
                                                            <p></p>
                                                            <form name="theFormName">
                                                                {question.answers.map((answer, answerIndex) => (
                                                                    <div class="section">
                                                                        <input
                                                                            type="radio"
                                                                            name="theRadioGroupName"
                                                                            key={answerIndex}
                                                                            onClick={() => handleAnswerClick(questionIndex, answerIndex)} />
                                                                        <p>{Object.values(answer)[0]}</p>
                                                                        <br />
                                                                    </div>
                                                                ))}
                                                            </form>
                                                        </div>
                                                    ))}
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="down">
                                        <div class="col-md-3 share">
                                            <p><span id="nam"></span> <br />
                                                Goodluck!!!</p>
                                            <p></p>
                                            <img src={Img1} alt="" />
                                        </div>
                                        <button id="next" onClick={calculateScore}>Submit <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Quiz;

