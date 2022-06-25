import React , { useState } from 'react'

function CreatPerson( {addPerson} ) {
    const [person , setPerson] = useState(
        {
            name: "",
            age: "",
        },
    )

    const handleChangeName = (e) => {
        const newPerson = {...person, name: e.target.value }
        setPerson(newPerson)
    }
    
    const handleChangeAge = (e) => {
        const newPerson = {...person, age: e.target.value }
        setPerson(newPerson)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addPerson(person)
    }
  return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" onChange={handleChangeName}></input>
                <label>Age</label>
                <input type="number" onChange={handleChangeAge}></input>
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
  )
}

export default CreatPerson