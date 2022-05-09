import React, { useState } from "react";
// import Qnumsec from "./Qnumsec";
// import Qsec from "./Qsec";
import Impbtn from "./ImpBtn";
import Option from "./Options";
import quesbtn from "./ImpBtn"
// import { Nextbtn } from "./ImpBtn";
const list = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20"
];

function App() {
  const [question, setques] = useState(list[0]);
  let updateQuestionSeq = (seq) => {
     setques(seq);
  }
  const [quesbtn,setquesbtn]=useState(false)
  // function markout(){
  //   console.log("markout")
  //   setquesbtn(false);
  // }
  function markChange(){
    setquesbtn(true);
  }
  function updateQues(event) {
    const btnPressed = event.target.name;
    setquesbtn(false);
    //let questionSeq = Number(btnPressed);
    // <Nextbtn function nextQuestion(){
    //   setbtn(btnPressed+1)
    // }/>
  
    if (btnPressed ==="1") {
      setques(list[0]);
    } else if (btnPressed === "2") {
      setques(list[1]);
    } else if (btnPressed === "3") {
      setques(list[2]);
    } else if (btnPressed === "4") {
      setques(list[3]);
    } else if (btnPressed === "5") {
      setques(list[4]);
    } else if (btnPressed === "6") {
      setques(list[5]);
    } else if (btnPressed === "7") {
      setques(list[6]);
    } else if (btnPressed === "8") {
      setques(list[7]);
    } else if (btnPressed === "9") {
      setques(list[8]);
    } else if (btnPressed === "10") {
      setques(list[9]);
    } else if (btnPressed === "11") {
      setques(list[10]);
    } else if (btnPressed === "12") {
      setques(list[11]);
    } else if (btnPressed === "13") {
      setques(list[12]);
    } else if (btnPressed === "14") {
      setques(list[13]);
    } else if (btnPressed === "15") {
      setques(list[14]);
    } else if (btnPressed === "16") {
      setques(list[15]);
    } else if (btnPressed === "17") {
      setques(list[16]);
    } else if (btnPressed === "18") {
      setques(list[17]);
    } else if (btnPressed === "19") {
      setques(list[18]);
    } else if (btnPressed === "20") {
      setques(list[19]);
    }
  }

  return (
    <div className="main-section">
      <div className="question-section">
        <div className="question">{question}</div>
        <Option />
        <Impbtn questionSeq={Number(question)} updateQuestionSeq={updateQuestionSeq} onAdd={markChange}/>
      </div>
      <div className="qNumber-section">
        <div className="forTime"></div>
        <div className="for-Qno">
          <button onClick={updateQues} style={{backgroundColor:quesbtn&&"blue"}} className="qNo" name="1">
            1
          </button>
          <button onClick={updateQues} className="qNo" name="2">
            2
          </button>
          <button onClick={updateQues} className="qNo" name="3">
            3
          </button>
          <button onClick={updateQues} className="qNo" name="4">
            4
          </button>
          <button onClick={updateQues} className="qNo" name="5">
            5
          </button>
          <button onClick={updateQues} className="qNo" name="6">
            6
          </button>
          <button onClick={updateQues} className="qNo" name="7">
            7
          </button>
          <button onClick={updateQues} className="qNo" name="8">
            8
          </button>
          <button onClick={updateQues} className="qNo" name="9">
            9
          </button>
          <button onClick={updateQues} className="qNo" name="10">
            10
          </button>
          <button onClick={updateQues} className="qNo" name="11">
            11
          </button>
          <button onClick={updateQues} className="qNo" name="12">
            12
          </button>
          <button onClick={updateQues} className="qNo" name="13">
            13
          </button>
          <button onClick={updateQues} className="qNo" name="14">
            14
          </button>
          <button onClick={updateQues} className="qNo" name="15">
            15
          </button>
          <button onClick={updateQues} className="qNo" name="16">
            16
          </button>
          <button onClick={updateQues} className="qNo" name="17">
            17
          </button>
          <button onClick={updateQues} className="qNo" name="18">
            18
          </button>
          <button onClick={updateQues} className="qNo" name="19">
            19
          </button>
          <button onClick={updateQues} className="qNo" name="20">
            20
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
