import React, { useState, useEffect, useHistory } from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import BasicQuestions from '../json/basicQuestions';
import useSound from 'use-sound';
import intervalsC from '../audios/intervalsC.mp3';

const QuestionCard = styled.div`
  margin: auto;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border: none;
  width: 50vw;
`
const Question = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border: none;
  width: 50vw;
  button {
    margin-top: 1vw;
  }
`

const Quiz = () => {
  const user = firebase.auth().currentUser;
  const [play] = useSound(intervalsC, {
    sprite: {
      half: [0, 3000],
      whole: [5300, 3500],
      min3rd: [10600, 3500],
      maj3rd: [16000, 3500],
      perf4th: [21300, 3500],
      tri: [26600, 3500],
      perf5th: [32000, 3500],
      aug5th: [37300, 3500],
      maj6th: [42600, 3500],
      min7th: [48000, 3500],
      maj7th: [53300, 3500],
      octave: [58600, 3500]
    }
  });
  const [quizEdition, setQuizEdition] = useState('Basic');
  const [quizStart, setQuizStart] = useState(false);
  const [quizChoice, setQuizChoice] = useState(false);
  const [initialQuizState, setInitialQuizState] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [quizReset, setQuizReset] = useState(false);
  const [startBasic, setStartBasic] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [question, setQuestion] = useState('');
  const [interval, setInterval] = useState('');
  const [correct, setCorrect] = useState('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState('');
  const [a4, setA4] = useState('');

  const basicEdition = () => {
    setQuizEdition('Basic');
    setQuizStart(true);
  };
  const startQuiz = () => {
    if (quizEdition === 'Basic') {
      basicQuizStart();
    }
    setQuizStart(false);
    setQuizChoice(false);
    setInitialQuizState(false);
  };
  const basicQuizStart = () => {
    const toggleBtn = document.getElementById('startBtn');
    toggleBtn.style.display = 'none';
    setStartBasic(true);
    setQuestionNum( currentQuestion => currentQuestion + 1 );
    loadNewQuestion();
  };
  const loadNewQuestion = () => {
    if (quizEdition === 'Basic') {
      setQuestion(BasicQuestions[questionNum].question);
      setInterval(BasicQuestions[questionNum].interval);
      setA1(BasicQuestions[questionNum].a1);
      setA2(BasicQuestions[questionNum].a2);
      setA3(BasicQuestions[questionNum].a3);
      setA4(BasicQuestions[questionNum].a4);
      setCorrect(BasicQuestions[questionNum].correct);
      setTotalQuestions(BasicQuestions.length);
    };
  };
  const checkAnswer = e => {
    setQuestionNum( currentQuestion => currentQuestion + 1 );
    jsonCheck(e);
  };
  const jsonCheck = e => {
    let id = e.target.getAttribute('data_id');
    if (id === correct) {
      setPlayerScore( currentPlayerScore => currentPlayerScore + 1 );
    }
    console.log('questionNum', questionNum);
    if (questionNum < totalQuestions) {
      loadNewQuestion();
    } else {
      gameOver();
    }
  };
  const gameOver = () => {
    setQuizReset(true);
  }

  if (user) {
    return (
      <QuestionCard>
        <button id='startBtn' onClick={basicQuizStart}>Start Quiz</button>
        {startBasic ? (
          <>
            <Question>
              {!quizReset ? (
                <>
                  <h3 className='quiz-question-number'>
                    Q. {questionNum}
                  </h3>
                  <h2 className='quiz-question'>{question}</h2>
                  <button onClick={() => play({ id: (interval) })}>Listen</button>
                  <button
                    className='btn btn-primary game-buttons'
                    onClick={checkAnswer}
                    data_id='1'
                  >
                    {a1}
                  </button>
                  <button
                    className='btn btn-primary game-buttons'
                    onClick={checkAnswer}
                    data_id='2'
                  >
                    {a2}
                  </button>
                  <button
                    className='btn btn-primary game-buttons'
                    onClick={checkAnswer}
                    data_id='3'
                  >
                    {a3}
                  </button>
                  <button
                    className='btn btn-primary game-buttons'
                    onClick={checkAnswer}
                    data_id='4'
                  >
                    {a4}
                  </button>
                </>
              ) : (
                ''
              )}
            </Question>
            <div>
              {quizReset ? (
                <>
                  <div className='quiz-player-score'>
                    <h1>
                      Final Score - {playerScore} /{' '}
                      {totalQuestions}
                    </h1>
                    <hr></hr>
                    <h3>
                      {(
                        (playerScore / totalQuestions) * 100
                      ).toFixed(2)}
                      %
                    </h3>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
          </>
        ) : (
          ''
        )}
      </QuestionCard>
    )} else {
    return (
      <h3 style={{color: "red", textAlign: 'center'}}>You must sign in to view content</h3>
    );
  }
};

export default Quiz;