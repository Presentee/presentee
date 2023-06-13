import React, { useState, useEffect } from "react";
import "./Presenting.css";
import { useNavigate } from 'react-router-dom';
import { Storage, DataStore } from 'aws-amplify';
import { Presentation, Question } from 'models';
import Button from "CustomComponents/Button";
import { BiRefresh, BiTrash } from 'react-icons/bi';

//import theme context
import ThemeContext from 'context/ThemeContext';
import { useContext } from "react";

//modal for the asking questions
export default function QuestionsModal(params) {

  useEffect(() => {
    retreiveQuestions();
  }, []);

  //get the theme
  const { theme } = useContext(ThemeContext);

  const [questions, setQuestions] = useState([{}]);

  //close modal function
  const closeModal = () => {
    params.toggleModal();
  };

  const showHideClassName = params.modalOpen ? "modal display-block" : "modal";

  async function retreiveQuestions() {
    //get the questions
    const questions = await DataStore.query(Question, (c) => c.presentationID.eq(params.presentationID));

    //set the questions
    setQuestions(questions);
  }

  async function deleteQuestion(question) {
    //delete the question
    await DataStore.delete(question);

    //refresh the questions
    retreiveQuestions();
  }

  function DisplayQuestions() {
    //if there are questions
    if (!questions.length > 0) {
      return (
        <div>
          <h3>No questions yet</h3>
        </div>
      )
    }
    else {
      return (
        <div style={{ maxHeight: '50vh', overflow: 'scroll', marginTop: '10px' }}>
          {questions.map((question, index) => (
            <div key={index} style={{ marginLeft: '10px', marginRight: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <h4 style={{ marginBottom: '0px' }}>Question #{index + 1}</h4>
                <Button onClick={() => deleteQuestion(question)}style={{ height: '25px', marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BiTrash style={{ fontSize: '15px' }} />
                </Button>
              </div>
              <div style={{ boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.6)", borderRadius: "5px" }}>
                <h3 style={{ margin: '0px', padding: '5px', maxWidth: '400px', wordWrap: 'break-word' }}>{question.Question}</h3>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className={showHideClassName}>
      <section className={`modal-main ${theme}`}>
        <h1>Audience Questions</h1>
        <Button onClick={retreiveQuestions}> <BiRefresh style={{ width: '100px', fontSize: '24px', marginBotton: '10px' }} /> </Button>

        <DisplayQuestions />

        <Button onClick={closeModal} style={{ width: '100px', margin: '10px' }}>Close</Button>
      </section>
    </div>
  )
}
