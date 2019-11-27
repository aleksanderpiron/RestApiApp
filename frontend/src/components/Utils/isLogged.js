const isLogged=()=>{
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    const tokenExp = localStorage.getItem('tokenExpirationDate');
    const currentTime = new Date().getTime();
    if(token && tokenExp){
        console.log('logged');
        return true;
    }
    else if (token===null || tokenExp===null || userId===null){
        console.log('not logged');
        return false;
    }
    else if (currentTime>tokenExp){
        console.log('logged but expired');
        return false;
    }
}

export default isLogged;