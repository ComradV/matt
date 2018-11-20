import React from 'react'
import Select from 'react-select';
import Regulator from './Regulator';

const customSelectStyles = {
    control: (provided, state) => ({
        ...provided,
        width: 250,
    }),
    multiValue: (provided) => ({
        ...provided,
        lineHeight: 1,
    })
}

const divStyle = {
    display: "inline-block",
}

const generateOptions = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push({ value: i, label: "" + i })
    }
    return result;
}
const weekDaysOptions = [
    { value: 0, label: "Sunday" },
    { value: 1, label: "Monday" },
    { value: 2, label: "Tuesday" },
    { value: 3, label: "Wednesday" },
    { value: 4, label: "Thursday" },
    { value: 5, label: "Friday" },
    { value: 6, label: "Saturday" },
];

const monthDaysOptions = generateOptions(1, 31);

const SettingsTab = ({ regulatedValues, regulatedNames, setHandler, selectedValues, selectedNames }) => {
    return (
        <div id="day" className="row">
            <form className="col s6 offset-s3">
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every day</span>
                        </label>
                    </p>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[0]}
                                    name={regulatedNames[0]}
                                    min={1}
                                    max={7}
                                />
                                day(s) starting on
                            </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[0]}
                                onChange={setHandler(selectedNames[0])}
                                options={weekDaysOptions}
                                isMulti={false}
                                styles={customSelectStyles}
                                closeMenuOnSelect={true}
                            />
                        </div>
                    </p>
                </div>
                <div className="option">
                    <div>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[1]}
                                    name={regulatedNames[1]}
                                    min={1}
                                    max={31}
                                />
                                day(s) starting at the
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[2]}
                                    name={regulatedNames[2]}
                                    min={1}
                                    max={31}
                                />
                                of the month
                            </span>
                        </label>
                    </div>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Specific day of week (choose one or many)
                            </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[1]}
                                onChange={setHandler(selectedNames[1])}
                                options={weekDaysOptions}
                                isMulti={true}
                                styles={customSelectStyles}
                                closeMenuOnSelect={false}
                            />
                        </div>
                    </p>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Specific day of month (choose one or many)
                            </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[2]}
                                onChange={setHandler(selectedNames[2])}
                                options={monthDaysOptions}
                                isMulti={true}
                                styles={customSelectStyles}
                                closeMenuOnSelect={false}
                            />
                        </div>
                    </p>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>On the last day of the month</span>
                        </label>
                    </p>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>On the last weekday of the month</span>
                        </label>
                    </p>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>On the last
                            </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[3]}
                                onChange={setHandler(selectedNames[3])}
                                options={weekDaysOptions}
                                isMulti={false}
                                styles={customSelectStyles}
                                closeMenuOnSelect={true}
                            />
                        </div>
                        <span class="afterSelect">of the month
                        </span>
                    </p>
                </div>

                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[3]}
                                    name={regulatedNames[3]}
                                    min={1}
                                    max={31}
                                />
                                day(s) before the end of the month
                            </span>
                        </label>
                    </p>
                </div>

                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Nearest weekday (Monday to Friday) to the
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[4]}
                                    name={regulatedNames[4]}
                                    min={1}
                                    max={31}
                                />
                                of the month
                            </span>
                        </label>
                    </p>
                </div>

                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>On the
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[5]}
                                    name={regulatedNames[5]}
                                    min={1}
                                    max={5}
                                />
                            </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[4]}
                                onChange={setHandler(selectedNames[4])}
                                options={weekDaysOptions}
                                isMulti={false}
                                styles={customSelectStyles}
                                closeMenuOnSelect={true}
                            />
                        </div>
                        <span class="afterSelect">of the month
                        </span>
                    </p>
                </div>


            </form>
        </div>
    )
}

export default SettingsTab;