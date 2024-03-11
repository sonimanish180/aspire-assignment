import { useState } from "react";
import { CardProps } from "../../../../types/navMenuTypes";
import CardComponent from "../../../../elementalComponents/cardComponent/CardComponent";
import { ICON_SOURCE } from "../../../../helpers/constants/imageConstants";

interface CardsCarouselProps {
    cardList: CardProps[],
    setActiveCardId: (id: string | number) => void;
}

const CardsCarousel = ({cardList, setActiveCardId} : CardsCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [showCardDetails, setShowCardDetails] = useState<boolean>(false)

    return (
        <div className="cards-carousel">
            <div className="carousel-container">
                <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {cardList.map((card: CardProps, index: number) => (
                        <CardComponent key={index} showCardDetails={showCardDetails} cardInfo={card.basicCardInfo} freezeStatus={card.freezeCard} />
                    ))}
                </div>
            </div>

            <div className="carousel-dots">
            {cardList.map((_, index: number) => (
                <span
                    key={index}
                    className={index === currentIndex ? 'dot active' : 'dot'}
                    onClick={() => {
                        setCurrentIndex(index)
                        setActiveCardId(cardList[index].cardId)
                        setShowCardDetails(false)
                    }}
                ></span>
            ))}
            </div>

            <div 
                className="show-details"
                onClick={() => setShowCardDetails(!showCardDetails)}
            >
                <img src={ICON_SOURCE.eyeIcon} alt="eye" />
                <span>Show card number</span>
            </div>
        </div>
    )
  }
  
  export default CardsCarousel;