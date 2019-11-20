import validator from 'validator';

const InputValidateHandler = (e, oldInputs) =>{
    const {value, name} = e.target;
    console.log(oldInputs[name]);
    let errorDetected = false;
    if(typeof oldInputs[name].conditions.isLength !== 'undefinded'){
        if(!validator.isLength(value, {min:oldInputs[name].conditions.isLength})){
            oldInputs[name].correct = false;
            oldInputs[name].errMsg = 'The entered value is too short';
            errorDetected = true;
        }
    }
    if(typeof oldInputs[name].conditions.isEmail !== 'undefinded'){
        if(!validator.isEmail(value)){
            oldInputs[name].correct = false;
            oldInputs[name].errMsg = 'Please enter a valid email';
            errorDetected = true;
        }
    }
    if(typeof oldInputs[name].conditions.isSameAs !== 'undefinded'){
        console.log(oldInputs[oldInputs[name].conditions.isSameAs].value);
        if(!validator.equals(value, oldInputs[oldInputs[name].conditions.isSameAs].value)){
            oldInputs[name].correct = false;
            oldInputs[name].errMsg = "Passwords don't match";
            errorDetected = true;
        }
    }
}

export default InputValidateHandler;