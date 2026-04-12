

export const Button = ({className='',children, type,disabled,onClick}) => {
    
    return (<button type={type} disable={disabled} onClick={onClick} className={`btn ${className}`}>{children}</button>)
}