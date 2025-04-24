import { useState } from 'react'
import './App.css'
import Form from './Components/Form';
import Preview from './Components/Preview/Preview';


function App() {
  const [present,setPresent]=useState("form");

  return (
    <>
    <div className="form-preview">
      <button onClick={()=>setPresent("form")}>Form</button>
      <button onClick={()=>setPresent("preview")}>Preview</button>
    </div>
        {present==='form' && <Form />}
        {present==='preview' && <Preview/>}
    </>
  )
}

export default App
