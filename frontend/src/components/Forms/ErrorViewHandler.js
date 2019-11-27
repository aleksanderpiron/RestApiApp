const ErrorViewHandler=(error, updatedInputs)=>{
    error.map(err=>{
        updatedInputs[err.param].correct = false;
        updatedInputs[err.param].errMsg = err.msg;
    })
    return updatedInputs;
}

export default ErrorViewHandler