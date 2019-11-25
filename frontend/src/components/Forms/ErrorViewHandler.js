const ErrorViewHandler=(error, updatedInputs)=>{
    if(typeof error.fieldName === 'object'){
        error.fieldName.map(err=>{
            updatedInputs[err].correct = false;
            updatedInputs[err].errMsg = err.message;
        })
    }
    else if (typeof error.fieldName === 'string'){
        updatedInputs[error.fieldName].correct = false;
        updatedInputs[error.fieldName].errMsg = error.message;
    }

    return updatedInputs;
}

export default ErrorViewHandler