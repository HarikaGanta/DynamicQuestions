import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Option } from "../App";
import { QInputs } from "../App";
interface QuestionTypeProps {
    qtype: string,
    questionInputs: QInputs,
    setQuestionInputs: Function
}



export default function QuestionType({ qtype, questionInputs, setQuestionInputs }: QuestionTypeProps) {
    const [options, setOptions] = useState<Option[]>([]);

    const addOption = () => {
        const id: string = uuidv4();
        const newOption = {
            id: id,
            val: ""
        }
        setOptions(prev => [...prev, newOption]);
    }
    const handleChange = (id: string, val: string) => {
        setOptions(prev => prev.map(opt => opt.id === id ? { ...opt, val: val } : opt));
        setQuestionInputs((prev: { options: Option[] }) => ({ ...prev, options: options }));

    }
    const handleDelete = (id: string) => {
        setOptions((prev) => prev.filter(opt => opt.id !== id));
        setQuestionInputs((prev: QInputs) => ({ ...prev, options: options }));
    }
    const handleNumberChange = (value: string, type: string) => {
        setQuestionInputs((prev: QInputs) => ({ ...prev, type: value }));
    }


    return <>
        {(qtype == "text" || qtype == "number") && <div>
            <span>Min value  <input type="number" value={questionInputs.min as number} onChange={(e) => handleNumberChange(e.target.value, "min")} /> </span>
            <br />
            <span>Max value <input type="number" value={questionInputs.max as number} onChange={(e) => handleNumberChange(e.target.value, "max")} /></span>
        </div>
        }
        {(qtype == "date") && <div>
            <span>Min value  <input type="date" value={questionInputs.minDate as string} onChange={(e) => handleNumberChange(e.target.value, "minDate")}/> </span>
            <br />
            <span>Max value <input type="date" value={questionInputs.maxDate as string} onChange={(e) => handleNumberChange(e.target.value, "maxDate")}/></span>
        </div>
        }
        {(qtype == "dsingle" || qtype == "dmultiple") && <div>
            {options.map((q) => (
                <div key={q.id} >
                    <input type="text" value={q.val} onChange={(e) => handleChange(q.id, e.target.value)} />
                    <input type="button" value="X" onClick={() => handleDelete(q.id)} />
                </div>
            ))}
            <input type="button" value="Add Option" onClick={addOption} />
        </div>
        }
    </>
}