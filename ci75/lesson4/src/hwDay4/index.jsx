import { useState } from "react"
import CreatPerson from "./CreatPerson"
import ListPerson from "./ListPerson" 

const YourInput = () => {
    const [listPerson , setListPerson] = useState([])

    const addPerson = (person) => {
        setListPerson([...listPerson , person ])
    }

    return (
        <div>
         <CreatPerson addPerson = {addPerson} />
         <ListPerson listPerson = {listPerson} />
        </div>
    )
}

export default YourInput 