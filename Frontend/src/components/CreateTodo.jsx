import axios from "axios"
import "./CreateTodo.css"
import { useState } from "react";

function CreateTodo() {
    let [title , setTitle] = useState(" ");
    let [description , setDescription] = useState(" ");
    console.log(title);

    function getValue(e){
        if (e.target.name == "title") {
            setTitle(e.target.value);
            console.log(title);
            }
            if (e.target.name == "description") {
            setDescription(e.target.value);
            console.log(e.target.value);
            }
    }

    return <>
    <label htmlFor="text">Title:</label>
    <input type="text" placeholder="enter title here" id="text" name="title" onChange={getValue}/>
    <br />
    <br />
    <label htmlFor="des">Description:</label>
    <input type="text" placeholder="enter description" id="des" name="description" onChange={getValue}/>
    <br />
    <br />
    <button onClick={()=>{
        axios({
            method: 'post',
            url: '/api/todo',
            data : {
              title : title,
              description : description
            }
          });
    }}>Enter To-do</button>
    </>
}

export { CreateTodo }