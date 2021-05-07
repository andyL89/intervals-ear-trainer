import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import firebase from "firebase/app";
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function QuizList(props){
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);
  const quizzes = useSelector(state => state.firestore.quizzes);
  const user = firebase.auth().currentUser;
  if (!user) {
    return (
      <h1>You must be signed in to view content</h1>
    )
  }
  else if (isLoaded(quizzes) && (user)) {
    return (
      <>
        <h1>Quiz List</h1>
        <hr />
        {quizzes.map((quiz) => {
            return <Quiz
              whenQuizClicked = { props.onQuizSelection }
              name={quiz.name}
              id={quiz.id}
              key={quiz.id}/>
          })}
      </>
    );
  } else if (isEmpty(quizzes) && (user)) {
    return (
      <h1>No quizzes yet!</h1>
    )
  } else {
    return (
      <h3>Loading...</h3>
    )
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;