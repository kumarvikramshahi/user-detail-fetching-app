import React from "react";
import "./card.css";
import Spinner from "../Spinner";
import dummyAvatar from "../assets/dummyAvatar.webp";

export default function Card({ details, smallSpinner }) {
    return (
        <div className="card">
            {smallSpinner ? <Spinner /> : (
                <div>
                    <img src={details ? details.avatar : dummyAvatar} alt={details?.avatar} className="img" />
                    {details ? (
                        <>
                            <div className="cardChild">
                                <b className="property">Name: </b> {details?.first_name + " " + details?.last_name}
                            </div>
                            <div className="cardChild">
                                <b className="property">Email Id: </b>
                                <a href={"mailto:" + details?.email}>{details.email}</a>
                            </div>
                        </>
                    ) : <div className="cardChild">Click on Buttons below to SEE User's details.</div>}
                </div>

            )}
        </div>
    )
}