import React, { useState, useEffect } from "react";
import "./Join.css";
import { useNavigate } from 'react-router-dom';
import { Storage, DataStore } from 'aws-amplify';
import { Presentation, Question } from 'models';
import Button from "CustomComponents/Button";

//import theme context
import ThemeContext from 'context/ThemeContext';
import { useContext } from "react";

//modal for the asking questions
export default function QuestionModal(params) {

  //get the theme
  const { theme } = useContext(ThemeContext);

  const [question, setQuestion] = useState("");

  //close modal function
  const closeModal = () => {
    params.toggleModal();
  };

  const showHideClassName = params.modalOpen ? "modal display-block" : "modal";

  //handle the question change
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  }

  //submit the question
  const submitQuestion = async () => {
    //get the current presentation id from params
    const presentationID = params.presentationID;

    if (question != "") {
      //create the question
      const newQuestion = await DataStore.save(
        new Question({
          Question: question,
          presentationID: presentationID,
        })
      );
    }

    //clear the question
    setQuestion("");

    //close the modal
    closeModal();
  }

  return (
    <div className={showHideClassName}>
      <section className={`modal-main ${theme}`}>
        <h1>Ask a Question</h1>

        <input type="text" id="question" name="question" placeholder="Enter your question here" onChange={handleQuestionChange} />

        <Button onClick={submitQuestion} style={{ width: '100px' }}>Submit</Button>

        <Button onClick={closeModal} style={{ width: '100px', margin: '10px' }}>Close</Button>
      </section>
    </div>
  )
}
