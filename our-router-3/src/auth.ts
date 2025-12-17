export const login = ()=> {
    localStorage.setItem('islogin', '1');
}


export const logout = ()=> {
    localStorage.removeItem('islogin');
}

export const isAuth = ()=> {
    return localStorage.getItem('islogin') === '1';
}