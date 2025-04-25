import './CreateQuestion.css'
import QuestionType from '../QuestionType';
import { useState } from 'react';
import { QInputs } from '../../App';

interface QuestionProps{
    id:string,
    setQuestions: Function,
    setQuestionInputs: Function,
    questionInputs: QInputs
  
}



export default function CreateQuestion({id,setQuestions,setQuestionInputs,questionInputs}:QuestionProps){
    // const [qtype,setQtype]=useState("text");
    const [questionDetails,setQuestionDetails]=useState({
        question:"",
        required:false,
        qtype:"text"
    });
    

    const deleteQuestion=(id:string)=>{
        setQuestions((prevquestions: { id: string }[]) => prevquestions.filter((question) => question.id !== id));
    }  
   
    
    return <>
    <div className="question">
        <div className="commonQElement">
            <input type="text" />
            <select id="addquestion" onChange={(e)=>setQuestionDetails(prev=>({...prev, qtype: e.target.value}))}>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="date">Date</option>
                <option value="document">Document</option>
                <option value="dsingle">Dropdown – Single Select</option>
                <option value="dmultiple">Dropdown – Multi Select</option>
            </select>
            <input type="button" value="Delete Question" onClick={()=>deleteQuestion(id)}/>  
            <label htmlFor={`required-${id}`}> <input type="checkbox" name="required" id={`required-${id}`} /> Required  </label>   
        </div>
        <QuestionType qtype={questionDetails.qtype} questionInputs={questionInputs} setQuestionInputs={setQuestionInputs}  />

    </div>
    
    </>
}