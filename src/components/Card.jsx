import React from "react";
import { clubs } from "../constants";

const Card = () => {
    return(
        <div className="container">
            {clubs.map((club) => (
                <div className="cards" key={club.id}>
                    <img src={club.image} alt={club.name}/>
                    <h3>{club.name}</h3>
                    <p>{club.description}</p>
                    <p className="schedule">{club.schedule}</p>
                    <button id="btn">Join Us</button>
                </div>
            ))}
        </div>
    )
}

export default Card