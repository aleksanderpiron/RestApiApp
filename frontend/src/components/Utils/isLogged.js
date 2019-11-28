const isLogged=()=>{
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    const tokenExp = localStorage.getItem('tokenExpirationDate');
    const currentTime = new Date().getTime();
    if(token && tokenExp){
        return true;

    }
    else if (token===null || tokenExp===null || userId===null){
        return false;

    }
    else if (currentTime>tokenExp){
        localStorage.removeItem('authToken');
        localStorage.removeItem('tokenExpirationDate');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        return false;
    }
}

export default isLogged;