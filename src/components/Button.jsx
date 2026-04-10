import { useContext } from "react"


export const Button = ({className='',children, onClick}) => {
    return (<button onClick={onClick} className={`btn ${className}`}>{children}</button>)
}