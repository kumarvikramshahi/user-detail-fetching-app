import React from "react";
import "./button.css";

export default function Button({ value, isActive, setActive, setUserId, userId }) {
    return (
        <button type="button" className={value.id === userId && isActive ? "btn btnActive" : "btn"}
            onClick={() => { setUserId(value.id); setActive(true); }}>
            {value.id}
        </button>
    )
}