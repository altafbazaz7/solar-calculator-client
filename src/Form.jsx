import { useState } from "react";
import { BASE_URL } from "./BASE_URL";
import { API } from "./api";

const Form = ({ setgetCalculations , setOpenForm}) => {

    const [details, setDetails] = useState({
        averageBill: "",
        rooftopArea: "",
        phoneNumber: ""
    })

    const handleSubmit = async() => {
        try {
            const res = await API.post(`${BASE_URL}/create`, details)
            if(res){
            const getResponse = await API.get(`${BASE_URL}/get`)
            setgetCalculations(getResponse && getResponse?.data)
            }
        } catch (error) {
            console.log(error,"error")
        }
        setOpenForm(false)

      
    }

    return (
        <div className="form_wrapper">
            <input onChange={(e) => setDetails((prev) => ({
                ...prev,
                averageBill: e.target.value
            }))}
                value={details.averageBill}
                placeholder="Average Monthly Electricity Bill"
            />
            <input
                onChange={(e) => setDetails((prev) => ({
                    ...prev,
                    rooftopArea: e.target.value
                }))}
                value={details.rooftopArea}
                placeholder="Roof Top Area Available"
            />
            <input
                onChange={(e) => setDetails((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value
                }))}
                value={details.phoneNumber}
                placeholder="Phone Number"
            />
            <button className="save_button" onClick={handleSubmit}>Save</button>

        </div>
    )
}

export default Form



// 1. Average monthly electricity bill

// 2. Rooftop area available(m2)

// 3. Phone number 