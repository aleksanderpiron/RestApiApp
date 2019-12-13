import validator from 'validator';

const InputValidateHandler = (e, oldState) =>{
    const {value, name} = e.target,
    newInputs = oldState.inputs;
    let errorDetected = false,
    newPasswordConditionBox;
    if(name === 'password'){
        newPasswordConditionBox = {
            length:true,
            number:true,
            uppercase:true,
            lowercase:true
        }
    }else{
        newPasswordConditionBox = oldState.passwordConditionBox
    }
    if(typeof newInputs[name].conditions !== 'undefined'){
        if(typeof newInputs[name].conditions.isLength !== 'undefined' && !validator.isLength(value, {min:newInputs[name].conditions.isLength})){
            newInputs[name].correct = false;
            newInputs[name].errMsg = 'The entered value is too short';
            errorDetected = true;
            if(name === 'password'){
                newPasswordConditionBox.length = false;
            }
        }
        if(typeof newInputs[name].conditions.isNumeric !== 'undefined' && !validator.isNumeric(value)){
            newInputs[name].correct = false;
            newInputs[name].errMsg = 'Price have to be number';
            errorDetected = true;
        }
        if(typeof newInputs[name].conditions.isEmail !== 'undefined' && !validator.isEmail(value)){
            newInputs[name].correct = false;
            newInputs[name].errMsg = 'Please enter a valid email';
            errorDetected = true;
        }
        if(typeof newInputs[name].conditions.isSameAs !== 'undefined' && value !== newInputs[newInputs[name].conditions.isSameAs].value){
            newInputs[name].correct = false;
            newInputs[name].errMsg = "Passwords don't match";
            errorDetected = true;
        }
        if(typeof newInputs[name].conditions.containsNumber !== 'undefined' && !/\d/.test(value)){
            newInputs[name].correct = false;
            newInputs[name].errMsg = "Passwords have to contain at least one number";
        errorDetected = true;
        if(name === 'password'){
            newPasswordConditionBox.number = false;
        }
        }
        if(typeof newInputs[name].conditions.containsUppercase !== 'undefined' && !/^(?=.*[A-Z])/.test(value)){
            newInputs[name].correct = false;
            newInputs[name].errMsg = "Passwords have to contain at least one uppercase";
            errorDetected = true;
            if(name === 'password'){
                newPasswordConditionBox.uppercase = false;
            }
        }
        if(typeof newInputs[name].conditions.containsLowercase !== 'undefined' && !/^(?=.*[a-z])/.test(value)){
            newInputs[name].correct = false;
            newInputs[name].errMsg = "Passwords have to contain at least one lowercase";
            errorDetected = true;
            if(name === 'password'){
                newPasswordConditionBox.lowercase = false;
            }
        }
        if(typeof newInputs[name].conditions.isNot !== 'undefined' && value === newInputs[name].conditions.isNot){
            newInputs[name].correct = false;
            newInputs[name].errMsg = "Value must be different";
            errorDetected = true;
            if(name === 'password'){
                newPasswordConditionBox.lowercase = false;
            }
        }
        if(!errorDetected){
            newInputs[name].errMsg = '';
            newInputs[name].correct = true;
        }else{
            newInputs[name].correct = false;
        }
    }
    newInputs[name].value = value;
    const newState = {
        inputs: newInputs,
        passwordConditionBox: newPasswordConditionBox,
    }
    if(typeof oldState.allInputsCorrect !== 'undefined'){
        let updatedallInputsCorrect = true;
        Object.values(newInputs).map(val=>{
            if(!val.correct){
                return updatedallInputsCorrect = false;
            }else{
                return false;
            }
        })
        newState.allInputsCorrect = updatedallInputsCorrect;
    }
    return newState;
}

export default InputValidateHandler;