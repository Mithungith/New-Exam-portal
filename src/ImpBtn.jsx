import React,{useState} from "react";
// import Qsec from "./Qsec";
// import updateQues from "./Qsec"

function Impbtn(props){
    //const q=props.quesbtn;
    function markQues(){
        props.onAdd();
    }
    function nxtQuestion(){
        const num = props.questionSeq + 1;
        props.updateQuestionSeq(num);
    }
    function prevQuestion(){
        const num = props.questionSeq - 1;
        props.updateQuestionSeq(num);
    }
    return <div className="important-btn">
    <button className="mark-question-btn" onClick={markQues}>Mark</button>
    <button className="back-btn" onClick={prevQuestion }>Back</button>
    <button className="next-btn" onClick={nxtQuestion}
    >Next</button>
    </div>
}

export default Impbtn;

// {nextQuestion}; 
// export {Nextbtn};
// export {changeq};