interface ButtonProps {
    handleClick: (...args: unknown[]) => void,
    type: 'primary' | 'secondary',
    buttonText: string,
    customStyle?: unknown,
    iconSrc?: string,
}

const CustomButton = ({handleClick, type, buttonText, customStyle, iconSrc} : ButtonProps) => {

    return (
        <button 
            onClick={handleClick}
            style={customStyle || {}}
            className={`custom-button ${type === 'primary' ? 'primary' : 'secondary'}`}
        >
            {iconSrc && <img src={iconSrc} alt='icon' />}
            <span>{buttonText}</span>
        </button>
    )
  }
  
  export default CustomButton;