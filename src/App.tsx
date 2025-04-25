import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import Preview from './Components/Preview/Preview';


export interface QInputs{
    min?:Number,
    max?:Number,
    minDate?:String,
    maxDate?:String,
    options?:Option[],
}
export interface Option{
    id:string,
    val:string,
}


function App() {
  const [present,setPresent]=useState("form");
  const [questionInputs,setQuestionInputs]=useState<QInputs>({});

  return (
    <>
    <div className="form-preview">
      <button onClick={()=>setPresent("form")}>Form</button>
      <button onClick={()=>setPresent("preview")}>Preview</button>
    </div>
        {present==='form' && <Form setQuestionInputs={setQuestionInputs} questionInputs={questionInputs}/>}
        {present==='preview' && <Preview/>}
    </>
  )
}

export default App
