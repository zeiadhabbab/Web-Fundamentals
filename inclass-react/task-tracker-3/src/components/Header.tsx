import type { PropsWithChildren } from "react"

const Header = ({children}: PropsWithChildren) => {
    return (
        <header className="app-header">
            {children}
            
        </header>
    )
}

export default Header