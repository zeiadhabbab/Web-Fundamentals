
interface HeaderProps  {
    handleRoutChange: (page: string) => void;
}


function Header({handleRoutChange}: HeaderProps){

    

    return (
        <header className="header">
            <button onClick={()=>{handleRoutChange('home')}}>Home</button>
            <button onClick={()=>{handleRoutChange('login')}}>Login</button>
            <button onClick={()=>{handleRoutChange('forget')}}>Forget</button>
        </header>
    )
}

export default Header;