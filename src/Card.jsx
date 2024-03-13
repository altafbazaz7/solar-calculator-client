
const Card = ({ details }) => {
    return (
        <div className="card_wrapper">
         
          <span>Panels Needed: {details.panelsNeeded}</span>
          <span>Required Area:{details.requiredArea}</span>
          <span>Capital Needed: {details.capitalNeeded}</span>
          <span>Breake Even Years:{details.breakevenYears}</span>
          <span>25years Earning:{details.next25YearsEarnings}</span>


        </div>
    )
}

export default Card
