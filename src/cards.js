import { FaStar } from "react-icons/fa";
import data from './data.js';

    
  
  function Card(props) {
      let available = "Available"
      if (props.openSpots <= 0){
        available = "SoldOut"
      }
      return (
            <div className="card card-component shadow-lg rounded m-3">
                <div className="available-text">{available}</div>
                <img className="card-img-top rounded p-3 card-image" src={props.img} alt="Card image"/>
                <div className="card-body">
                <span><FaStar className='star'/>{props.rating} {props.location}</span>
                <h4 className="card-title">{props.title}</h4>
                <span><b>From {props.price}$</b> / person</span>
                </div>
            </div>
    )
}

function CardList(){
    let mapped_data = data.map((x) => {
        return <Card location={x['location']} img={x['coverImg']} title={x['title']} price={x['price']} openSpots={x['openSpots']} /> 
    })

    return(
        <div className='cards'>
            {mapped_data}
        </div>
    )
}

export {CardList};