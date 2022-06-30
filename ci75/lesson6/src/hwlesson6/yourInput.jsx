import "./styles.css"
import {useState} from "react"

function YourInput () {
    const [input , getInput] = useState(
        {
            name: "",
            amount: "",
            date: "",
        },
    )

    const [listAmount , getListAmount] = useState([])

    const handelChangeName = (e) => {
        getInput({...input, name: e.target.value})
    }

    const handelChangeAmount = (e) => {
        getInput({...input, amount: e.target.value})
    }

    const handelChangeDate = (e) => {
        console.log(e.target.value)
        getInput({...input, date: e.target.value})
    }

    const handelAdd = (e) => {
        e.preventDefault()
        getListAmount([...listAmount, input])
    }
    return(
        <div>
            <form className = "inputForm">
                <label>Name</label>
                <input type="text" placeholder="Enter name here ..." className="yourInput" onChange={handelChangeName}></input>
                

                <label>Amount</label>
                <input type="text" placeholder="Enter amount here ..." className="yourInput" onChange={handelChangeAmount}></input>
                

                <label>Date</label>
                <input type="date" placeholder="dd/mm/yyyy" className="yourInput" onChange={handelChangeDate}></input>

                <button className="btn--add" onClick={handelAdd}>ADD</button>
                <button className="btn--cancel">CANCEL</button>
            </form>

            <div className="listAmount">
                <select className="selectYear">
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>

                <div>
                    {
                        listAmount.map((item,index) => {
                            return(
                                <div className="list--amount" key={index}>
                                    <div className="amount--date">
                                        {/* <p>January</p>
                                        <p>2022</p>
                                        <p>16</p> */}
                                        {item.date}
                                    </div>
                
                                    <div>
                                        <h1>{item.name}</h1>
                                    </div>
                
                                    <div className="amount--amount">
                                        <p>$ {item.amount}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default YourInput