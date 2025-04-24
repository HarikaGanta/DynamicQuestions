import { JSX, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface QuestionTypeProps {
    qtype: string;
}
interface Option{
    uniId:string,
    id:string,
    option: JSX.Element
}

export default function QuestionType({ qtype }: QuestionTypeProps) {
    const [options,setOptions]=useState<Option[]>([]);
    // const [optVal,setOptVal]=useState<Record<string, string>>({});
    const addOption=()=>{
        const id:string=uuidv4();
        // setOptVal((prev)=>({...prev,id:""}))
        console.log(options);
        const newOption={
            uniId:id,
            option: <div key={id} >
                <input type="text" value="" onChange={(e)=>setOptions((prev)=>({...prev, id: e.target.value}))}/>
                <input type="button" value="X" onClick={()=>handleDelete(id)}/>
            </div>,
            id:""
        }
        setOptions(prev => [...prev,newOption]) 
        
    }
    const handleDelete=(id: string)=>{
        setOptions((prev)=>prev.filter(opt=>opt.uniId!==id))
    }
    



    return <>
    {(qtype=="text" || qtype=="number") && <div> 
            <span>Min value  <input type="number"/> </span>
            <br />
            <span>Max value <input type="number"/></span> 
        </div>
    }
    {(qtype=="date") && <div> 
            <span>Min value  <input type="date"/> </span>
            <br />
            <span>Max value <input type="date"/></span> 
        </div>
    }
    {(qtype=="dsingle" || qtype=="dmultiple") && <div> 
            {options.map((q) => (
                   <> {q.option} </>
            ))}
            <input type="button" value="Add Option" onClick={addOption}/>
        </div>
    }
    </>
}