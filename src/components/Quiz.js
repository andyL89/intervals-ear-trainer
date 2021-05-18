import React, { useState } from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import Delayed from './Time/Delayed';
import IntervalQuestions from '../json/intervalQuestions';
import ChordQuestions from '../json/chordQuestions';
import SeventhChordQuestions from '../json/seventhChordQuestions';
import useSound from 'use-sound';
import intervalsC from '../audios/intervalsC.mp3';
import beginnerChords from '../audios/beginnerChords.mp3';
import seventhChords from '../audios/seventhChords.mp3';
import playBtn from '../img/play.png';

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
  button {
    border-radius: 5px;
    padding: 5px;
  }
`
const QuizChoice = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border: none;
  width: 50vw;
  button {
    border-radius: 5px;
    padding: 5px;
  }
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
const PlayButton = styled.div`
  border-radius: 50px;
  transition: .3s;
  img {
    max-width: 70px;
    max-height: 70px;
  }
  &:hover {
    background-color: #0080FF;
    cursor: pointer;
  }
`

const Quiz = () => {

  const user = firebase.auth().currentUser;

  const [playInt] = useSound(intervalsC, {
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

  const [playChord] = useSound(beginnerChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      major3: [9580, 4000],
      major4: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });

  const [play7thChord] = useSound(seventhChords, {
    sprite: {
      major1: [0, 4000],
      major2: [4780, 4000],
      dominant1: [9580, 4000],
      dominant2: [14380, 4000],
      minor1: [19180, 4000],
      minor2: [23900, 4000],
      minor3: [28780, 4000],
      minor4: [33580, 4000],
      diminished1: [38380, 4000],
      diminished2: [43190, 4000],
      augmented1: [47900, 4000],
      augmented2: [52780, 4000]
    }
  });

  const [quizEdition, setQuizEdition] = useState('');
  const [quizStart, setQuizStart] = useState(false);
  const [quizChoice, setQuizChoice] = useState(false);
  const [initialQuizState, setInitialQuizState] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [quizReset, setQuizReset] = useState(false);
  const [startInterval, setStartInterval] = useState(false);
  const [startBeginnerChord, setStartBeginnerChord] = useState(false);
  const [startSeventhChord, setStartSeventhChord] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [question, setQuestion] = useState('');
  const [interval, setInterval] = useState('');
  const [correct, setCorrect] = useState('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState('');
  const [a4, setA4] = useState('');

  const intervalEdition = () => {
    const toggleBtns = document.getElementById('quizButtons');
    toggleBtns.style.display = 'none';
    setQuizEdition('interval');
    setQuizStart(true);
  };

  const beginnerChordEdition = () => {
    const toggleBtns = document.getElementById('quizButtons');
    toggleBtns.style.display = 'none';
    setQuizEdition('beginnerChord');
    setQuizStart(true);
  };

  const seventhChordEdition = () => {
    const toggleBtns = document.getElementById('quizButtons');
    toggleBtns.style.display = 'none';
    setQuizEdition('seventhChord');
    setQuizStart(true);
  };

  const startQuiz = () => {
    const toggleBtn = document.getElementById('startButton');
    toggleBtn.style.display = 'none';
    if (quizEdition === 'interval') {
      intervalQuizStart();
    } else if (quizEdition === 'beginnerChord') {
      beginnerChordQuizStart();
    } else if (quizEdition === 'seventhChord') {
      seventhChordQuizStart();
    }
    setQuizStart(false);
    setQuizChoice(false);
    setInitialQuizState(false);
  };

  const intervalQuizStart = () => {
    setStartInterval(true);
    setQuestionNum( currentQuestion => currentQuestion + 1 );
    loadNewQuestion();
  };

  const beginnerChordQuizStart = () => {
    setStartBeginnerChord(true);
    setQuestionNum( currentQuestion => currentQuestion + 1 );
    loadNewQuestion();
  };

  const seventhChordQuizStart = () => {
    setStartSeventhChord(true);
    setQuestionNum( currentQuestion => currentQuestion + 1 );
    loadNewQuestion();
  };

  const loadNewQuestion = () => {
    if (quizEdition === 'interval') {
      setQuestion(IntervalQuestions[questionNum].question);
      setInterval(IntervalQuestions[questionNum].interval);
      setA1(IntervalQuestions[questionNum].a1);
      setA2(IntervalQuestions[questionNum].a2);
      setA3(IntervalQuestions[questionNum].a3);
      setA4(IntervalQuestions[questionNum].a4);
      setCorrect(IntervalQuestions[questionNum].correct);
      setTotalQuestions(IntervalQuestions.length);

    } else if (quizEdition === 'beginnerChord') {
      setQuestion(ChordQuestions[questionNum].question);
      setInterval(ChordQuestions[questionNum].interval);
      setA1(ChordQuestions[questionNum].a1);
      setA2(ChordQuestions[questionNum].a2);
      setA3(ChordQuestions[questionNum].a3);
      setA4(ChordQuestions[questionNum].a4);
      setCorrect(ChordQuestions[questionNum].correct);
      setTotalQuestions(ChordQuestions.length);

    } else if (quizEdition === 'seventhChord') {
      setQuestion(SeventhChordQuestions[questionNum].question);
      setInterval(SeventhChordQuestions[questionNum].interval);
      setA1(SeventhChordQuestions[questionNum].a1);
      setA2(SeventhChordQuestions[questionNum].a2);
      setA3(SeventhChordQuestions[questionNum].a3);
      setA4(SeventhChordQuestions[questionNum].a4);
      setCorrect(SeventhChordQuestions[questionNum].correct);
      setTotalQuestions(SeventhChordQuestions.length);
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
        <QuizChoice id='quizButtons'>
          <button id='intervalBtn' onClick={intervalEdition}>Interval Quiz</button>
          <button id='beginnerChordBtn' onClick={beginnerChordEdition}>Triad Chord Quiz</button>
          <button id='intermediateChordBtn' onClick={seventhChordEdition}>Seventh Chord Quiz</button>
        </QuizChoice>
        { quizEdition !== '' &&
          <button id='startButton' onClick={startQuiz}>Start Quiz</button>
        }
        {startInterval || startBeginnerChord || startSeventhChord ? (
          <>
            <Question>
              {!quizReset ? (
                <>
                  <h3 className='quiz-question-number'>
                    Q. {questionNum}
                  </h3>
                  <h2 className='quiz-question'>{question}</h2>
                  { quizEdition === 'interval' &&
                    <PlayButton onClick={() => playInt({ id: (interval) })}><img src={playBtn} alt="play"/></PlayButton>
                  }
                  { quizEdition === 'beginnerChord' &&
                    <PlayButton onClick={() => playChord({ id: (interval) })}><img src={playBtn} alt="play"/></PlayButton>
                  }
                  { quizEdition === 'seventhChord' &&
                    <PlayButton onClick={() => play7thChord({ id: (interval) })}><img src={playBtn} alt="play"/></PlayButton>
                  }
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