import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const getData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://cijs75-6408f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json"
            );
            setLoading(false);
            console.log(Object.values(res.data));
            setData(Object.values(res.data));
        } catch (error) {
            console.log(error);
            setError(true);
        }
      };

      useEffect(() => {
        getData();
      }, []);
    
      let content = <p>Content</p>;
    
      if (error) content = <p>Error</p>;
    
      if (loading && !error) content = <p>Loading</p>;
    
      if (!loading) {
        content = data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <p>{item.name}</p>
              <p>{item.age}</p>
            </React.Fragment>
          );
        });
      }

    const [form , setForm] = useState(
        {
            name: "",
            age: ""
        },
    )

    const [newForm , setNewForm] = useState([])

    const handleChangeName = (e) => {
        setForm({...form , name: e.target.value})
    }

    const handleChangeAge = (e) => {
        setForm({...form , age: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewForm([...newForm , form])
        try {
            await axios.post(
              "https://cijs75-6408f-default-rtdb.asia-southeast1.firebasedatabase.app/person.json",
              form
            );
            getData();
            setLoading(false);
          } catch (error) {
            console.log(error);
            setError(true);
          }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={form.name} onChange={handleChangeName}></input>
            <label>Age</label>
            <input type="number" value={form.age} onChange={handleChangeAge}></input>
            <button type="submit" >Submit</button>
        </form>

        {
            newForm.map((item , index) => {
                return(
                    <div key={index}>
                        {item.name}
                        {item.age}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Index