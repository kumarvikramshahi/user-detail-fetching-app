import React from "react";
import "./card.css"
import Spinner from "../Spinner";

export default function Card({ details, smallSpinner }) {
    return (
        <div className="card">
            {smallSpinner ? <Spinner /> : (
                details ? (
                    <div>
                        <img src={details?.avatar} alt={details?.avatar} className="img" />
                        <div className="cardChild">
                            <b className="property">Name: </b> {details?.first_name + " " + details?.last_name}
                        </div>
                        <div className="cardChild">
                            <b className="property">Email Id: </b>
                            <a href={"mailto:" + details?.email}>{details.email}</a>
                        </div>
                    </div>
                ) : "Click on Buttons  below to  SEE user Details"
            )}
        </div>
    )
}