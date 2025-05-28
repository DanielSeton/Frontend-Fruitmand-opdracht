import './Button.css'

function Button({type, label, onClick, isDisabled}) {
    return (
        <button
            type={type}
            disabled={isDisabled}
            onClick={onClick}
            >{label}
        </button>
    )
}

export default Button;