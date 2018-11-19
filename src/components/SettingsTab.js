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

const generateOptions = num => {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push({ value: i, label: "" + i })
    }
    return result;
}


const SettingsTab = ({ increaseHandler, decreaseHandler, changeHandler, name, startValue, everyValue, selectedOption, range, selectHandler, valueBetweenStart, valueBetweenEnd }) => {
    const options = generateOptions(range);
    return (
        <div id={name} className="row">
            <form className="col s6 offset-s3">
                <div >
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every {name}</span>
                        </label>
                    </p>
                </div>
                <div >
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every
                                <Regulator
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                    value={everyValue}
                                    name={name + 'Every'}
                                    changeHandler={changeHandler}
                                />
                                {name}(s) starting at {name}
                                <Regulator
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                    value={startValue}
                                    name={name + 'Start'}
                                    changeHandler={changeHandler}
                                />
                            </span>
                        </label>
                    </p>
                </div>
                <div >
                    <div>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Specific {name} (choose one or many): </span>
                        </label>
                        <div className="select-element" style={divStyle} >
                            <Select
                                value={selectedOption}
                                onChange={selectHandler(name + 'SelectedOption')}
                                options={options}
                                isMulti
                                styles={customSelectStyles}
                                closeMenuOnSelect={false}
                            />
                        </div>
                    </div>
                </div>
                <div >
                    <p>
                        <label>
                            <input className="with-gap" name="optionSelector" type="radio" />
                            <span>Every {name} between
                                        <Regulator
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                    value={valueBetweenStart}
                                    name={name + 'BetweenStart'}
                                    changeHandler={changeHandler}
                                />
                                and
                                        <Regulator
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                    value={valueBetweenEnd}
                                    name={name + 'BetweenEnd'}
                                    changeHandler={changeHandler}
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