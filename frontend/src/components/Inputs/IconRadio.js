import React from 'react';
import Icon from '../Icon/Icon';

const IconRadio =({label, inputData, name, change})=>{
        const optionsItems = inputData.options.map(option=>{
            return <label className={inputData.value===option.label?'option active':'option'}>
                <input type="radio" name={name} onClick={change} value={option.label}/>
                <Icon type={option.icon}/>
                <p>{option.label}</p>
            </label>
        })
    return(
        <div className='icon-radio'>
            {typeof label !=='undefined' && <p>{label}</p>}
            <div className="options">
                {optionsItems}
            </div>
        </div>
    )
}

export default IconRadio;