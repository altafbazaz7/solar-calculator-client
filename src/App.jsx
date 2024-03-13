
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import { API } from "./api";
import { BASE_URL } from "./BASE_URL";
import Card from "./Card";

const App = () => {
  const [openForm, setOpenForm] = useState(false);
  const [getCalculations, setgetCalculations] = useState([])

  useEffect(() => {
    const handleFetch = async () => {
      const res = await API.get(`${BASE_URL}/get`);
      if (res && res.data) {
        setgetCalculations(res.data)
      }
    }
    handleFetch();
  }, [])


  return (
    <div className="app_wrapper">
      <h1 className="title">Solar Calulator</h1>

      {
        openForm && (<Form setgetCalculations={setgetCalculations} setOpenForm={setOpenForm} />)
      }
      <div className={`${openForm ? "hide" : "card_container" }`}>
      {
        getCalculations && getCalculations.map((calc,index) => {
          return(
            <>
              <Card details={calc}/>
            </>
          )
        })
      }

      </div>
      
      <button className="add_button" onClick={() => setOpenForm(true)}>Add</button>
    </div>
  )
}

export default App
