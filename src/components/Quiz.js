// import React from "react";
// import styled from 'styled-components';
// import BasicQuestions from '../json/basicQuestions'

// const QuestionCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content:center;
//   padding-bottom: 10px;
//   border: 2px solid black;
//   border-radius: 5px;
// `

// class Quiz extends React.Component {
//   state = {
//       quizEdition: '',
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
//   }
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
//     let id = e.target.getAttribut('data_id');
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
// }
// <QuestionCard>
//   {this.state.startBasic ? (
//     <>
//       <div>
//         {!this.state.quizReset ? (
//           <>
//             <h3 className='quiz-question-number'>
//               Q. {this.state.questionNum}
//             </h3>
//             <h2 className='quiz-question'>{this.state.question}</h2>
//             <button
//               className='btn btn-primary game-buttons'
//               onClick={this.checkAnswer}
//               data_id='1'
//             >
//               {this.state.a1}
//             </button>
//             <button
//               className='btn btn-primary game-buttons'
//               onClick={this.checkAnswer}
//               data_id='2'
//             >
//               {this.state.a2}
//             </button>
//             <button
//               className='btn btn-primary game-buttons'
//               onClick={this.checkAnswer}
//               data_id='3'
//             >
//               {this.state.a3}
//             </button>
//             <button
//               className='btn btn-primary game-buttons'
//               onClick={this.checkAnswer}
//               data_id='4'
//             >
//               {this.state.a4}
//             </button>
//           </>
//         ) : (
//           ''
//         )}
//       </div>
//       <div>
//         {this.state.quizReset ? (
//           <>
//             <div className='quiz-player-score'>
//               <h1>
//                 Final Score - {this.state.playerScore} /{' '}
//                 {this.state.totalQuestions}
//               </h1>
//               <hr></hr>
//               <h3>
//                 {(
//                   (this.state.playerScore / this.state.totalQuestions) * 100
//                 ).toFixed(2)}
//                 %
//               </h3>
//             </div>
//           </>
//         ) : (
//           ''
//         )}
//       </div>
//     </>
//   ) : (
//     ''
//   )}
// </QuestionCard>


// export default Quiz;