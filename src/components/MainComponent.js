import React from 'react';
import UserTab from './UserTab.js';
import SettingsTab from './SettingsTab.js';

class mainComponent extends React.Component {

  state = {
    duration: "20",
    minuteEvery: 0,
    minuteStart: 0,
    minuteSelectedOption: null,
    minuteBetweenStart: 0,
    minuteBetweenEnd: 0,
    hourEvery: 0,
    hourStart: 0,
    hourSelectedOption: null,
    hourBetweenStart: 0,
    hourBetweenEnd: 0,
  }
  increaseHandler = (name) => {
    return event => {
      this.setState((state) => {
        return { [name]: state[name] + 1 }
      })
    }
  }

  changeHandler = (name) => {
    return event => {
      this.setState({
        [name]: event.target.value,
      }
      )
    }
  }

  decreaseHandler = (name) => {
    return event => {
      this.setState((state) => {
        return {
          [name]: (state[name] < 1) ?
            0 :
            state[name] - 1
        }
      })
    }
  }

  durationChangeHandler = event => {
    this.setState({ duration: event.target.value })
  }

  selectHandler = (name) => {
    return selectedOption => {
      this.setState({
        [name]: selectedOption,
      }
      )
    }
  }
  /////////////////////////////////////////////
  // handleSelectMinutesChange = (selectedMinutesOption) => {
  //   this.setState({ selectedMinutesOption });
  //   console.log(`Option selected:`, selectedMinutesOption);
  // }
  // handleSelectHoursChange = (selectedHoursOption) => {
  //   this.setState({ selectedHoursOption });
  //   console.log(`Option selected:`, selectedHoursOption);
  // }
  // optionHoursChangeHandler = (event) => {
  //   console.log('Hours: ' + event);
  // }
  // optionMinutesChangeHandler = (event) => {
  //   console.log('Minutes: ' + event);
  // }
  // minutesEveryChangeHandler = (event) => {
  //   console.log('MinutesEvery: ' + event);
  // }
  // minutesStartChangeHandler = (event) => {
  //   console.log('MinutesStart: ' + event);
  // }
  radioSelectHandler = (event) => {
    console.log('ch!');
    this.setState({
      radioSelectedOption: event.target.dataset.option,
    })
  }
  setRadioOption = (option) => {
    this.setState({
      radioSelectedOption: option,
    })
  }

  render() {
    return (
      <div id="mainContainer" className="container-fluid">
        <div className="row">

          <ul className="tabs">
            <li className="tab col s2 offset-s3"><a href="#user">User</a></li>
            <li className="tab col s2"><a className="active" href="#minute">Minutes</a></li>
            <li className="tab col s2"><a href="#hour">Hours</a></li>
          </ul>
          <UserTab
            value={this.state.duration}
            changeHandler={this.durationChangeHandler}
            min="0"
            max="60"
            name="duration"
          />
          <SettingsTab
            increaseHandler={this.increaseHandler}
            decreaseHandler={this.decreaseHandler}
            changeHandler={this.changeHandler}
            selectHandler={this.selectHandler}

            startValue={this.state.minuteStart}
            everyValue={this.state.minuteEvery}
            selectedOption={this.state.minuteSelectedOption}
            name="minute"
            range={60}
            valueBetweenStart={this.state.minuteBetweenStart}
            valueBetweenEnd={this.state.minuteBetweenEnd}
          />

          <SettingsTab
            increaseHandler={this.increaseHandler}
            decreaseHandler={this.decreaseHandler}
            changeHandler={this.changeHandler}
            selectHandler={this.selectHandler}

            startValue={this.state.hourStart}
            everyValue={this.state.hourEvery}
            selectedOption={this.state.hourSelectedOption}
            name="hour"
            range={24}
            valueBetweenStart={this.state.hourBetweenStart}
            valueBetweenEnd={this.state.hourBetweenEnd}
          />
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