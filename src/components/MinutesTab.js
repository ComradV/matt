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

const minutesOptions = generateOptions(0, 59);


const SettingsTab = ({ regulatedValues, regulatedNames, setHandler, selectedValues, selectedNames }) => {
    return (
        <div id="minute" className="row">
            <form className="col s6 offset-s3">
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every minute</span>
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
                                />
                                minute(s) starting at minute
                                <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[1]}
                                    name={regulatedNames[1]}
                                />
                            </span>
                        </label>
                    </p>
                </div>
                <div className="option">
                    <div>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Specific minute (choose one or many): </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedValues[0]}
                                onChange={setHandler(selectedNames[0])}
                                options={minutesOptions}
                                isMulti
                                styles={customSelectStyles}
                                closeMenuOnSelect={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every minute between
                                        <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[2]}
                                    name={regulatedNames[2]}
                                    min={1}
                                />
                                and
                                        <Regulator
                                    setHandler={setHandler}
                                    value={regulatedValues[3]}
                                    name={regulatedNames[3]}
                                    min={1}
                                />
                            </span>
                        </label>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default SettingsTab;