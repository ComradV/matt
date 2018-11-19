import React from 'react'

const leftRegButtonStyle = {
    marginLeft: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
}

const rightRegButtonStyle = {
    marginRight: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
}

const inputStyle = {
    width: 40,
}

const Regulator = ({ increaseHandler, decreaseHandler, changeHandler, name, value }) => {
    return (
        <React.Fragment>
            <a style={leftRegButtonStyle} className="waves-effect waves-light btn blue-grey lighten-5 reg-btn" onClick={decreaseHandler(name)}>-</a>
            <input type="text" style={inputStyle} name={name} onChange={changeHandler(name)} value={value} className="center-align" />
            <a style={rightRegButtonStyle} className="waves-effect waves-light btn blue-grey lighten-5 reg-btn" onClick={increaseHandler(name)}>+</a>
        </React.Fragment>
    )
}

export default Regulator;