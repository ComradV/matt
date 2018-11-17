import React from 'react';
import Select from 'react-select';

const generateOptions = num => {
  const result = [];
  for(let i = 1; i < num; i++){
    result.push({value: i-1, label: i-1})
  }
  return result;
}
const optionsHours = generateOptions(24);
const optionsMinutes = generateOptions(60);

class mainComponent extends React.Component {
  state = {
    optionHours: 0,
    optionMinutes: 0,
    minutesEvery: 0,
    minutesStart: 0,
    selectedMinutesOption: null,
    selectedHoursOption: null,
  }

  handleSelectMinutesChange = (selectedMinutesOption) => {
    this.setState({ selectedMinutesOption });
    console.log(`Option selected:`, selectedMinutesOption);
  }
  handleSelectHoursChange = (selectedHoursOption) => {
    this.setState({ selectedHoursOption });
    console.log(`Option selected:`, selectedHoursOption);
  }
  optionHoursChangeHandler = (event) => {
    console.log('Hours: ' + event);
  }
  optionMinutesChangeHandler = (event) => {
    console.log('Minutes: ' + event);
  }
  minutesEveryChangeHandler = (event) => {
    console.log('MinutesEvery: ' + event);
  }
  minutesStartChangeHandler = (event) => {
    console.log('MinutesStart: ' + event);
  }
  render() {
    const { value, changeHandler } = this.props;
    const { selectedMinutesOption, selectedHoursOption } = this.state;
    return (
      <div id="mainContainer" className="container-fluid">
        <div className="row">

          <ul className="tabs">
            <li className="tab col s2 offset-s3"><a href="#user">User</a></li>
            <li className="tab col s2"><a className="active" href="#minutes">Minutes</a></li>
            <li className="tab col s2"><a href="#hours">Hours</a></li>
          </ul>
          <div id="user" className="col s12">
            <form className="col s6 offset-s3">
              <div className="input-field  ">
                <input id="first_name" type="text"></input>
                <label htmlFor="first_name">Your name</label>
              </div>
              <div className="input-field  ">
                <p className="range-field">
                  <label htmlFor="duration">Duration</label>
                  <input type="range" id="duration" name="duration" min="0" max="60" value={value} onChange={changeHandler} />
                </p>
              </div>
            </form>

          </div>
          <div id="minutes" className="row">
            <form className="col s6 offset-s3">
              <div >
                <p>
                  <label>
                    <input className="with-gap" name="groupMin" type="radio" onChange={this.optionMinutesChangeHandler} />
                    <span>Every minute</span>
                  </label>
                </p>
              </div>
              <div >
                <p>
                  <label>
                    <input className="with-gap" name="groupMin" type="radio" onChange={this.optionMinutesChangeHandler} />
                    <span>Every
                    <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">-</a>
                      <input type="text" id="minutesEvery" name="minutesEvery" onChange={this.minutesEveryChangeHandler} value={this.state.minutesEvery} className="center-align" />
                      <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">+</a>
                      minute(s) starting at minute
                    <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">-</a>
                      <input type="text" id="minutesStart" name="minutesStart" onChange={this.minutesStartChangeHandler} value={this.state.minutesStart} className="center-align" />
                      <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">+</a>

                    </span>
                  </label>
                </p>
              </div>
              <div >
                <div>
                  <label>
                    <input className="with-gap" name="groupMin" type="radio" onChange={this.optionMinutesChangeHandler} />
                    <span>Specific minute (choose one or many)</span>
                  </label>
              <Select
                value={selectedMinutesOption}
                onChange={this.handleSelectMinutesChange}
                options={optionsMinutes}
                isMulti
                closeMenuOnSelect={false}
              />
                </div>
              </div>
              <div >
                <p>
                  <label>
                    <input className="with-gap" name="groupMin" type="radio" onChange={this.optionMinutesChangeHandler} />
                    <span>Every minute between
                    <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">-</a>
                      <input type="text" id="minutesFrom" name="minutesFrom" value="0" className="center-align" />
                      <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">+</a>
                      and
                    <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">-</a>
                      <input type="text" id="minutesTo" name="minutesTo" value="0" className="center-align" />
                      <a className="waves-effect waves-light btn blue-grey lighten-5 reg-btn">+</a>

                    </span> </label>
                </p>
              </div>

            </form>
          </div>
          <div id="hours" className="row">

          </div>

        </div>

      </div>
    )
    // return (
    //   <div className="container">
    //     <div className="row">

    //       <ul className="tabs">
    //         <li className="tab col s4"><a className="active" href="#user">User!</a></li>
    //         <li className="tab col s4"><a href="#minutes">Minutes</a></li>
    //         <li className="tab col s4"><a href="#hours">Hours</a></li>
    //       </ul>
    //       <div id="user" className="col s12">
    //         <form >
    //           <div className="input-field col s6 offset-s3">
    //             <input id="first_name" type="text" className="validate"></input>
    //             <label htmlFor="first_name">Your name</label>
    //           </div>
    //           <div className="input-field col s6 offset-s3">
    //             <p className="range-field">
    //               <label htmlFor="duration">Duration</label>
    //               <input type="range" id="duration" name="duration" min="0" max="60" value={value} onChange={changeHandler} />
    //             </p>
    //           </div>
    //         </form>

    //       </div>
    //       <div id="minutes" className="row">
    //       </div>
    //       <div id="hours" className="row">
    //         <h1>hours</h1>
    //       </div>

    //     </div>
    //   </div>
    // )
  }
}


export default mainComponent;