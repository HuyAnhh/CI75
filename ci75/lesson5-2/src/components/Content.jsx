import React , {useState} from 'react'

function Content() {
    const [nameTodo , setNameTodo] = useState("")
    const [listTodo , setListTodo] = useState([
])

    const handleOnChange = (e) => {
        setNameTodo(e.target.value)
    }
    
    const handleAdd = (e) => {
        e.preventDefault()
        setListTodo([...listTodo, {name: nameTodo , done: false}])
    }

    const handleDelete = (item,index) => {
        listTodo.splice(index ,1)
        setListTodo([...listTodo])

    }

    const handleDone = (item, index , i) => {
        if (i === index) {
            return( [...item, {done: true}])
        }else {
            return item
        }
    }
  return (
    <div>
        <input type = "text" onChange = {handleOnChange}></input>
        <button onClick = {handleAdd}>Add</button>

        {
            listTodo.map((item , index) => {
                return(
                    <div>
                        <span key={index} style={{margin: "20px"}}>{index +1}. {item.name}</span>
                        <span>{item.done ? "done" : ""}</span>
                        <button onClick = {() => handleDelete(item,index)}>Delete</button>
                        <button onClick={() => handleDone(item, index)}>Done</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Content