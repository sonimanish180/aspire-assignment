import { BasicCardInfo } from "../../types/navMenuTypes";

interface CardComponentProps {
    cardInfo: BasicCardInfo,
    showCardDetails: boolean,
    freezeStatus: boolean
}

const CardComponent = ({cardInfo, showCardDetails, freezeStatus} : CardComponentProps) => {

    return (
        <div className={`carousel-card card-component ${freezeStatus ? 'freeze' : ''}`}>
            <div className="card-logo">
                <img src={cardInfo.cardLogo} alt="logo" />
            </div>

            <p className="name">
                {cardInfo.cardOwnerName}
            </p>
            
            {!showCardDetails ? <p className="card-number">
                <FourDots />
                <FourDots />
                <FourDots />
                <span className="number">{cardInfo.maskedNumber}</span>
            </p> : 

            <p className="card-number">
                <span className="number">{cardInfo?.unmaskedNumber?.toString().slice(0, 4)}</span>
                <span className="number">{cardInfo?.unmaskedNumber?.toString().slice(4, 8)}</span>
                <span className="number">{cardInfo?.unmaskedNumber?.toString().slice(8, 12)}</span>
                <span className="number">{cardInfo?.unmaskedNumber?.toString().slice(12, 16)}</span>
            </p>}
            
            <div className="valid-cvv">
                <span className="validity">
                    <span>Thru: </span>
                    <span style={{letterSpacing: '1.6px'}}>{cardInfo.validThru}</span>
                </span>

                <span className="cvv">
                    <span>CVV: </span>
                    {showCardDetails ? <span>{cardInfo?.cvv}</span> : <span className="star">***</span>}
                </span>
            </div>

            <div className="card-type-logo">
                <img src={cardInfo.cardTypeLogo} alt="logo" />
            </div>
        </div>
    )
}

export default CardComponent;

export const FourDots = () => {
    return  <div className="mask-dot-container">
        <span className="mask-dot"></span>
        <span className="mask-dot"></span>
        <span className="mask-dot"></span>
        <span className="mask-dot"></span>
    </div>
}