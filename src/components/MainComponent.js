import React from 'react';
import UserTab from './UserTab.js';
import MinutesTab from './MinutesTab.js';
import DaysTab from './DaysTab.js';

class mainComponent extends React.Component {

  state = {
    duration: "20",   

    everyMinute2:1,   
    everyMinuteStart2:0,
    minutesSelected3:null,
    minuteBetweenStart4: 0,
    minuteBetweenEnd4: 0,

    everyDay2: 1, 
    daysSelected2: null,
    everyDay3: 1,
    everyDayStart3: 1,
    daysSelected4: null,
    daysSelected5: null,
    daysSelected8: null,
    dayBefore10: 1,
    nearestWeekday11:1,
    numberWeekday12: 1,
    daysSelected12: null,
  }
  setHandler = (name) => {
    return value => {
      this.setState({ [name]: value })
    }
  }

  durationChangeHandler = event => {
    this.setState({ duration: event.target.value })
  }

  render() {
    return (
      <div id="mainContainer" className="container-fluid">
        <div className="row">

          <ul className="tabs">
            <li className="tab col s2 offset-s3"><a href="#user">User</a></li>
            <li className="tab col s2"><a className="active" href="#minute">Minutes</a></li>
            <li className="tab col s2"><a href="#day">Days</a></li>
          </ul>
          <UserTab
            value={this.state.duration}
            changeHandler={this.durationChangeHandler}
            min="0"
            max="60"
            name="duration"
          />
          <MinutesTab
            setHandler={this.setHandler}
            regulatedNames={["everyMinute2","everyMinuteStart2","minuteBetweenStart4","minuteBetweenEnd4"]}
            regulatedValues={["everyMinute2","everyMinuteStart2","minuteBetweenStart4","minuteBetweenEnd4"].map(name => this.state[name])}
            selectedNames={["minutesSelected3"]}
            selectedValues={["minutesSelected3"].map(name => this.state[name])}
          />

          <DaysTab
            setHandler={this.setHandler}
            regulatedNames={["everyDay2","everyDay3","everyDayStart3","dayBefore10","nearestWeekday11","numberWeekday12"]}
            regulatedValues={["everyDay2","everyDay3","everyDayStart3","dayBefore10","nearestWeekday11","numberWeekday12"].map(name => this.state[name])}
            selectedNames={["daysSelected2", "daysSelected4", "daysSelected5", "daysSelected8", "daysSelected12"]}
            selectedValues={["daysSelected2", "daysSelected4", "daysSelected5", "daysSelected8", "daysSelected12"].map(name => this.state[name])}
          />
        </div>

      </div>
    )
    
  }
}


export default mainComponent;