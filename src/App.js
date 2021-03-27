import './App.css';
import Nav from './Nav';
import Calendar from './Calendar';
import React, { useState } from 'react';

function App() {
  const [questionState, setQuestionState] = useState(
    [
      { type: "number", question: "Number of pushups", answer: "", options: [] },
      { type: "boolean", question: "Had a long walk today", answer: "", options: ["True", "False"] },
      { type: "text", question: "One great thing that happened today", answer: "", options: [] },
      { type: "multiple-choice", question: "Today was a:", answer: "", options: ["Ok day", "Bad day", "Great day"] }
    ]
  );
  return (
    <div className="App">
      <Nav />
      <Calendar />
    </div>
  );
}

export default App;
