import React from 'react';

const Select=(props)=>{
    const options = props.options.map(option=>{
        return <option value={option}>{option} </option>;
    })
    return(
        <label className={'select '}>
            <span>{props.label}</span>
            <select name={props.name} onChange={props.change}>
                {options}
            </select>
        </label>
    )
}

export default Select;