import React from 'react'

const leftRegButtonStyle = {
    marginLeft: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
}

const rightRegButtonStyle = {
    marginRight: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
}

const inputStyle = {
    width: 40,
}

const Regulator = ({ setHandler, name, value, min=0, max=0 }) => {
    const isValid = num => {
        return num >= min && (!max||num <= max);
    }
    const getValidValue = (potentialNewValue) => isValid(parseInt(potentialNewValue))?parseInt(potentialNewValue):value;
    
    const changeHandler = event => {
        setHandler(name)(getValidValue(event.target.value))
    };
    const increaseHandler = () => {
        setHandler(name)(getValidValue(value+1))
    }
    const decreaseHandler = () => {
        setHandler(name)(getValidValue(value-1))
    }
    return (
        <React.Fragment>
            <a style={leftRegButtonStyle} className="waves-effect waves-light btn blue-grey lighten-5 reg-btn" onClick={decreaseHandler}>-</a>
            <input type="text" style={inputStyle} name={name} onChange={changeHandler} value={value} className="center-align" />
            <a style={rightRegButtonStyle} className="waves-effect waves-light btn blue-grey lighten-5 reg-btn" onClick={increaseHandler}>+</a>
        </React.Fragment>
    )
}

export default Regulator;