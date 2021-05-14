import React, { useState, useEffect, useHistory } from "react";
import styled from 'styled-components';
import firebase from "firebase/app";
import BasicQuestions from '../json/basicQuestions';

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

const Quiz = () => {
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
  const [correct, setCorrect] = useState('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [a3, setA3] = useState('');
  const [a4, setA4] = useState('');


};


// class Quiz extends Component {
//   state = {
//       quizEdition: 'Basic',
//       quizStart: false,
//       quizChoice: false,
//       initialQuizState: true,
//       playerScore: 0,
//       quizReset: false,
//       startBasic: false,
//       questionNum: 0,
//       totalQuestions: 0,
//       question: '',
//       correct: '',
//       a1: '',
//       a2: '',
//       a3: '',
//       a4: '',
//     };

//   basicEdition = e => {
//     this.setState({
//       quizEdition: 'Basic',
//       quizStart: true
//     });
//   };
//   startQuiz = () => {
//     if (this.state.quizEdition === 'Basic') {
//       this.basicQuizStart();
//     }
//     this.setState({
//       quizStart: false,
//       quizChoice: false,
//       initialQuizState: false
//     });
//   };
//   basicQuizStart = () => {
//     const toggleBtn = document.getElementById('startBtn');
//     toggleBtn.style.display = 'none';
//     this.setState({
//       startBasic: true,
//       questionNum: this.state.questionNum + 1
//     });
//     this.loadNewQuestion();
//   };
//   loadNewQuestion = () => {
//     if (this.state.quizEdition === 'Basic') {
//       this.setState({
//         question: BasicQuestions[this.state.questionNum].question,
//         a1: BasicQuestions[this.state.questionNum].a1,
//         a2: BasicQuestions[this.state.questionNum].a2,
//         a3: BasicQuestions[this.state.questionNum].a3,
//         a4: BasicQuestions[this.state.questionNum].a4,
//         correct: BasicQuestions[this.state.questionNum].correct,
//         totalQuestions: BasicQuestions.length
//       });
//     };
//   };
//   checkAnswer = e => {
//     this.setState({
//       questionNum: this.state.questionNum + 1
//     });
//     this.jsonCheck(e);
//   };
//   jsonCheck = e => {
//     let id = e.target.getAttribute('data_id');
//     if (id === this.state.correct) {
//       this.setState({
//         playerScore: this.state.playerScore + 1
//       });
//     }
//     console.log('questionNum', this.state.questionNum);
//     if (this.state.questionNum < this.state.totalQuestions) {
//       this.loadNewQuestion();
//     } else {
//       this.gameOver();
//     }
//   };
//   gameOver = () => {
//     this.setState({
//       quizReset: true,
//     });
//   }
// render() {
//   const user = firebase.auth().currentUser;
//   if (user) {
//     return (
//       <QuestionCard>
//         <button id='startBtn' onClick={this.basicQuizStart}>Start Quiz</button>
//         {this.state.startBasic ? (
//           <>
//             <div>
//               {!this.state.quizReset ? (
//                 <>
//                   <h3 className='quiz-question-number'>
//                     Q. {this.state.questionNum}
//                   </h3>
//                   <h2 className='quiz-question'>{this.state.question}</h2>
//                   <button
//                     className='btn btn-primary game-buttons'
//                     onClick={this.checkAnswer}
//                     data_id='1'
//                   >
//                     {this.state.a1}
//                   </button>
//                   <button
//                     className='btn btn-primary game-buttons'
//                     onClick={this.checkAnswer}
//                     data_id='2'
//                   >
//                     {this.state.a2}
//                   </button>
//                   <button
//                     className='btn btn-primary game-buttons'
//                     onClick={this.checkAnswer}
//                     data_id='3'
//                   >
//                     {this.state.a3}
//                   </button>
//                   <button
//                     className='btn btn-primary game-buttons'
//                     onClick={this.checkAnswer}
//                     data_id='4'
//                   >
//                     {this.state.a4}
//                   </button>
//                 </>
//               ) : (
//                 ''
//               )}
//             </div>
//             <div>
//               {this.state.quizReset ? (
//                 <>
//                   <div className='quiz-player-score'>
//                     <h1>
//                       Final Score - {this.state.playerScore} /{' '}
//                       {this.state.totalQuestions}
//                     </h1>
//                     <hr></hr>
//                     <h3>
//                       {(
//                         (this.state.playerScore / this.state.totalQuestions) * 100
//                       ).toFixed(2)}
//                       %
//                     </h3>
//                   </div>
//                 </>
//               ) : (
//                 ''
//               )}
//             </div>
//           </>
//         ) : (
//           ''
//         )}
//       </QuestionCard>
//     )}  else {
//       return (
//         <h3 style={{color: "red", textAlign: 'center'}}>You must sign in to view content</h3>
//       );
//     }
//   }
// }

export default Quiz;