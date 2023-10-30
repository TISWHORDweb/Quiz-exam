import React, { useState, useEffect } from "react";
import Img1 from '../../Assets/img/feature-graphic.png'
import { Volunteer } from './Questionas'

// function Quiz() {

//     const questionsData = [
//         {
//             question: 'What is your favorite color?',
//             answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
//             correctAnswer: "answer2"
//         },
//         {
//             question: 'What is your favorite animal1?',
//             answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
//             correctAnswer: "answer1"
//         },
//         {
//             question: 'What is your favorite animal2?',
//             answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
//             correctAnswer: "answer2"
//         },
//         {
//             question: 'What is your favorite animal3?',
//             answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
//             correctAnswer: "answer4"
//         },
//         {
//             question: 'What is your favorite animal4?',
//             answers: [{ answer1: 'Dog' }, { answer2: 'Cat' }, { answer3: 'Bird' }, { answer4: 'Rabbit' }],
//             correctAnswer: "answer3"
//         },
//     ];

//     const [mainArray, setMainArray] = useState([]);
//     const handleIndexClicks = (index) => {
//         const newArray = [index];
//         setMainArray(newArray);

//     };

//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     let array = []

//     const handleClick = () => {
//         setCurrentQuestion(currentQuestion < questionsData.length - 1 ? currentQuestion + 1 : 0);

//         array.push(mainArray)
//         // console.log(array)
//     };

//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);

//     const handleQuestionClick = ( selectedAnswer) => {
//         const currentQuestion = questionsData[currentQuestion];
//         if (currentQuestion.correctAnswer === selectedAnswer) {
//             setScore(score + 10);
//         }
//         console.log(selectedAnswer)
//         console.log(currentQuestion.correctAnswer)
//         // setCurrentQuestionIndex(index);
//     };



//     return (
//         <div>
//             <div class="fifth">
//                 <div class="col-md-12">
//                     <div class="nav">
//                         <h2> <span id="schooly"></span></h2>
//                         <h3><span id="namy"></span></h3>
//                         <div class="">
//                             <p>Elasped Time</p>
//                             <div class="time">
//                                 <h2 id="time">00</h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div>
//                                 <h2>Current Score: {score}</h2>
//                                 {questionsData.map((data, index) => (
//                                     <div key={index}>
//                                         <h3 onClick={() => handleQuestionClick(index, null)}>
//                                             {data.question}
//                                         </h3>
//                                         {currentQuestionIndex === index && (
//                                             <ul>
//                                                 {data.answers.map((answer, answerIndex) => {
//                                                     const selectedAnswer = `answer${answerIndex + 1}`;
//                                                     return (
//                                                         <li
//                                                             key={answerIndex}
//                                                             onClick={() => handleQuestionClick(index, selectedAnswer)}
//                                                         >
//                                                             {Object.values(answer)}
//                                                         </li>
//                                                     );
//                                                 })}
//                                             </ul>
//                                         )}

//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div>
//                             <h2>Current Score: {score}</h2>
//                                 <h2>{questionsData[currentQuestion].question}</h2>
//                                 <ul>
//                                     {questionsData[currentQuestion].answers.map((answer, answerIndex) => {
//                                         const selectedAnswer = `answer${answerIndex + 1}`;
//                                         return (
//                                             <li
//                                                 key={answerIndex}
//                                                 onClick={() => handleQuestionClick( selectedAnswer)}
//                                             >
//                                                 {Object.values(answer)}
//                                             </li>
//                                         );
//                                     })}
//                                 </ul>
//                                 <p>Main Array: {JSON.stringify(mainArray)}</p>
//                                 <button onClick={handleClick}>Next Question</button>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="container ">
//                         <h2 class="counter"><span id="nums">1</span>/10</h2>
//                         <div class="m-5" id="par">

//                         </div>
//                         <div class="col-md-12">
//                             <div class="down">
//                                 <div class="col-md-3 share">
//                                     <p><span id="nam"></span> <br />
//                                         Goodluck!!!</p>
//                                     <p></p>
//                                     <img src={Img1} alt="" />

//                                 </div>
//                                 <button id="next">Next <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
//                                     <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
//                                 </svg></button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Quiz


const Quiz = () => {

    const questionsData = [
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
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    // const questionsData = [
    //     {
    //         question: "What is your favorite color?",
    //         answers: [{ answer1: "Dog" }, { answer2: "Cat" }, { answer3: "Bird" }, { answer4: "Rabbit" }],
    //         correctAnswer: "answer2",
    //     },
    //     // Add more questions here
    // ];

    const handleAnswerClick = (answer) => {
        if (!selectedAnswers[currentQuestionIndex]) {
            setSelectedAnswers((prev) => {
                const updatedAnswers = [...prev];
                updatedAnswers[currentQuestionIndex] = answer;
                return updatedAnswers;
            });
        }
    };

    const calculateScore = () => {
        let tempScore = 0;
        selectedAnswers.forEach((selectedAnswer, index) => {
            if (selectedAnswer === questionsData[index].correctAnswer) {
                tempScore += 10;
            }
        });
        return tempScore;
    };


    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft((prev) => prev - 1);
            } else {
                alert("The quiz has finished!");
                // Calculate and display the score
                const finalScore = calculateScore();
                alert(`Your final score is ${finalScore}`);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    return (
        <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{questionsData[currentQuestionIndex].question}</p>
            {questionsData[currentQuestionIndex].answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswerClick(`answer${index + 1}`)}>
                    {answer[`answer${index + 1}`]}
                </button>
            ))}
            <button onClick={handleNextQuestion}>Next Question</button>
            <p>Time left: {timeLeft} seconds</p>
        </div>
    );
};


export default Quiz;


