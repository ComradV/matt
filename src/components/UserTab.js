import React from 'react'

const UserTab = ({ value, changeHandler, min, max, name }) => {
    return (<div id="user" className="col s12">
        <form className="col s6 offset-s3">
            <div className="input-field  ">
                <input id="first_name" type="text"></input>
                <label htmlFor="first_name">Your name</label>
            </div>
            <div className="input-field">
                <p className="range-field">
                    <label htmlFor={name}>Duration: {value}</label>
                    <input type="range" id={name} name={name} min={min} max={max} value={value} onChange={changeHandler} />
                </p>
            </div>
        </form>

    </div>)
}


export default UserTab;