import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import React, {useState} from "react"

function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);
    const [count,setCount] = useState(0);

    const clickFunc=()=>{
        setCount(prevCount=>prevCount+1);
        setTitle(`clicked ${count+1} times`);
    }

    return(
        <div className={"expense-item"}>
            <ExpenseDate date = {props.date}/>
            <div className="expense-item_description">{title}</div>
            <div className="expense-item_price">{props.amount}</div>

            <button onClick={clickFunc} >change title </button>
        </div>
    )
}

export default ExpenseItem