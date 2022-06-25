import React from 'react'

function ListPerson({listPerson}) {
  return (
    <ul>
        {listPerson.map((item , index) => {
            return(
                <ol key={index} >
                    {item.name} -
                     {item.age}
                </ol>
            )
        })}
    </ul>
  )
}

export default ListPerson