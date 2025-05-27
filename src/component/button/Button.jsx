import './Button.css'

function Button({type, label, onClick, isDisabled}) {
    return (
        <button
            type={type}
            onClick={onClick}
            >{label}
        </button>
    )
}

export default Button;