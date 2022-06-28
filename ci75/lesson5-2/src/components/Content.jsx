import React , {useState} from 'react'

function Content() {
    const [nameTodo , setNameTodo] = useState("")
    const [listTodo , setListTodo] = useState([])

    const handleOnChange = (e) => {
        setNameTodo(e.target.value)
    }
    
    const handleAdd = (e) => {
        e.preventDefault()
        setListTodo([...listTodo , nameTodo])
    }

    const handleDelete = (item,index) => {
        listTodo.splice(index ,1)
        setListTodo([...listTodo])

    }
  return (
    <div>
        <input type = "text" onChange = {handleOnChange}></input>
        <button onClick = {handleAdd}>Add</button>

        {
            listTodo.map((item , index) => {
                return(
                    <div>
                        <span key={index}>{index +1}. {item}</span>
                        <button onClick = {() => handleDelete(item,index)}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Content