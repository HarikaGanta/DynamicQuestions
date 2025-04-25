import { Dispatch, JSX ,SetStateAction,useState } from "react"
import CreateQuestion from "./CreateQuestion/CreateQuestion";
import { v4 as uuidv4 } from 'uuid';
import { QInputs } from "../App";


export interface Question{
    id:string,
    question:JSX.Element,
}
interface FormProps {
    setQuestionInputs: Dispatch<SetStateAction<QInputs>>,
    questionInputs:QInputs
}

export default function Form({setQuestionInputs,questionInputs}:FormProps) {
    const [questions, setQuestions] = useState<Question[]>([]);
    const addQuestion=()=>{
        const id=uuidv4();
        const newQuestion:Question={
            id:id,
            question: <CreateQuestion key={id} id={id} setQuestions={setQuestions} setQuestionInputs={setQuestionInputs} questionInputs={questionInputs}/>   
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

  