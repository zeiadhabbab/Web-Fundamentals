export function login(): void{
    localStorage.setItem('islogin', '1');
}

export function logout(): void{
    localStorage.removeItem('islogin');
}

export function isAuth(): boolean{
    return localStorage.getItem('islogin') === "1";
}