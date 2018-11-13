import React from 'react';


const mainComponent = ({ value, changeHandler }) => {
  return (
    <div className="container">
      <div className="row">

        <ul className="tabs">
          <li className="tab col s4"><a className="active" href="#user">User</a></li>
          <li className="tab col s4"><a href="#minutes">Minutes</a></li>
          <li className="tab col s4"><a href="#hours">Hours</a></li>
        </ul>
        <div id="user" className="col s12">
          <form >
            <div className="input-field col s6 offset-s3">
              <input id="first_name" type="text" className="validate"></input>
              <label htmlFor="first_name">Your name</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <p className="range-field">
                <label htmlFor="duration">Duration</label>
                <input type="range" id="duration" name="duration" min="0" max="60" value={value} onChange={changeHandler} />
              </p>
            </div>
          </form>

        </div>
        <div id="minutes" className="row">
          <form >
            <div className="input-field col s6 offset-s3">
              <input id="first_name" type="text" className="validate"></input>
              <label htmlFor="first_name">Your name</label>
            </div>
            <div className="input-field col s6 offset-s3">
              <p className="range-field">
                <label htmlFor="duration">Duration</label>
                <input type="range" id="duration" name="duration" min="0" max="60" value={value} onChange={changeHandler} />
              </p>
            </div>
          </form>        </div>
        <div id="hours" className="row">

        </div>

      </div>
    </div>
  )
}

export default mainComponent;