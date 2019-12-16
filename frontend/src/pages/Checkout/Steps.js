import React from 'react';
import Icon from '../../components/Icon/Icon';

const Steps=(props)=>{
    const steps = [
        {
            icon:'cart-outline',
            text:'Shopping cart'
        },
        {
            icon:'box',
            text:'Customer details\xa0&\xa0delivery'
        },
        {
            icon:'card',
            text:'Payment method'
        },
        {
            icon:'success-thin',
            text:'Finalize order'
        },
    ];
    const stepsMaped = steps.map((step, index)=>{
        let arrow = true;
        if(index === steps.length-1){
            arrow = false;
        }
        let classes = 'step ';
        if(index===props.currentStep){
            classes+='current';
        }
        else if(index<props.currentStep){
            classes+='past';
        }
        return <div key={`step_${index}`} className={classes}>
                <Icon type={step.icon}/>
                <p>{step.text}</p>
                {arrow && <Icon iconClass='next-arrow' type={'arrow-bold'}/>}
            </div>
    })
    return(
        <div className="steps">
            {stepsMaped}
        </div>
    )
}

export default Steps;