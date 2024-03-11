import { ICON_SOURCE } from "../../helpers/constants/imageConstants";

interface DropdownProps {
    dropDownId: string,
    title: string,
    iconSrc: string,
    handleClick: (id: string ) => void
    open: boolean
}

const Dropdown = ({dropDownId, title, iconSrc, handleClick, open} : DropdownProps) => {

    return (
        <div 
            className="dropdown"
            onClick={() => handleClick(dropDownId)}
        >
            <div 
                className="dropdown-content"
            >
                <img src={iconSrc} alt={title} />
                <span className="title">{title}</span>
            </div>

            <img src={open ? ICON_SOURCE.upArrowIcon : ICON_SOURCE.downArrowIcon} alt="arrow" />
        </div>
    )
  }
  
  export default Dropdown;