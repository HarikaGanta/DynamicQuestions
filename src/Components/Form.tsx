import { JSX ,useState } from "react"
import CreateQuestion from "./CreateQuestion/CreateQuestion";
import { v4 as uuidv4 } from 'uuid';


export interface Question{
    id:string,
    question:JSX.Element,
}

export default function Form() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const addQuestion=()=>{
        const id=uuidv4();
        const newQuestion:Question={
            id:id,
            question: <CreateQuestion key={id} id={id} setQuestions={setQuestions} />   
        }
        setQuestions(prequestions => [...prequestions,newQuestion]) 
        
    }

    

    

    return <div>
        {questions.map((q) => (
                <div key={q.id}>{q.question}</div> 
        ))}
        <input type="button" value="Add Question" onClick={addQuestion}/>
    </div>
}

  