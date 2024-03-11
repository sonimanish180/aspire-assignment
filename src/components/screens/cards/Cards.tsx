import { useState } from "react";
import CustomButton from "../../../elementalComponents/customButton/CustomButton";
import { ICON_SOURCE } from "../../../helpers/constants/imageConstants";
import { CardActionProps, CardProps, TabItemProps, TransactionProps, TxnType } from "../../../types/navMenuTypes";
import CardsCarousel from "./cardsCarousel/CardsCarousel";
import { cardActions, cardsList } from "../../../helpers/mockData";
import Dropdown from "../../../elementalComponents/dropdown/Dropdown";
import AddCardModal from "../../../elementalComponents/addCardModal/AddCardModal";

const tabItems: TabItemProps[] = [
  {
    tabId: 1,
    label: 'My debit cards'
  },
  {
    tabId: 3,
    label: 'All company cards'
  }
]

const Cards = () => {
  const [activeTab, setActiveTab] = useState<string | number>(1)
  const [tempCardList, setTempCardList] = useState<CardProps[]>(cardsList);
  const [activeCardId, setActiveCardId] = useState<number | string>(tempCardList[0].cardId);
  const [activeDropdown, setActiveDropdown] = useState<string[]>([])
  const [openAddCardModal, setOpenAddCardModal] = useState<boolean>(false);

  const checkIfFreeze = () => {
    let freezeStatus = false;
    tempCardList.forEach((card: CardProps) => {
      if (card?.cardId === activeCardId) freezeStatus = card.freezeCard
    });
    return freezeStatus;
  }

  const handleFreezeStatus = () => {
    console.log("CLICKED HERE")
    const updatedCardList = tempCardList.map((card: CardProps) => {
      if (card?.cardId === activeCardId) {
        return {
          ...card,
          freezeCard: !card.freezeCard
        }
      }
      return card
    });

    setTempCardList(updatedCardList)
  }

  const handelDropDownClick = (id: string) => {
    let newActiveDropdown = activeDropdown;
    if (activeDropdown.includes(id)) {
      newActiveDropdown = activeDropdown.filter((dropId: string) => dropId !== id)
      setActiveDropdown(newActiveDropdown)
    }
    else setActiveDropdown([...activeDropdown, id])
  }

  const getActiveCardsTransactionList = () => {
    let activeCardTransactions: TransactionProps[] = []
    tempCardList.forEach((card: CardProps) => {
      if (card.cardId === activeCardId) activeCardTransactions = card.recentTransactions
    })
    return activeCardTransactions
  }

  const handleAddNewCard = (cardName: string, cardId: string) => {
    const newCardData = {
      cardId: cardId,
      basicCardInfo: {
        cardOwnerName: cardName,
        maskedNumber: 2134,
        unmaskedNumber: 1231123112312134, //can generate new card number or call an API to get response of whole new card detail
        validThru: '10/24',
        cvv: 420,
        cardLogo: ICON_SOURCE.cardLogo,
        cardTypeLogo: ICON_SOURCE.visaLogo,
      },
      recentTransactions: [],
      freezeCard: false,
    }
    setTempCardList([...tempCardList, newCardData])
    setOpenAddCardModal(false)
  }

  return (
    <div className="cards-screen">
      <div className='cards-screen-header'>
        <div className="balance">
          <div className="label">Available balance</div>
          <div className="amount-container">
            <span className="dollar">S$</span>
            <span className="amount">3,000</span>
          </div>
        </div>

        <CustomButton
          handleClick={() => setOpenAddCardModal(true)}
          type='primary'
          buttonText="New card"
          iconSrc={ICON_SOURCE.addIcon}
        />
      </div>

      <div className="card-tabs">
        {tabItems.map((tabItem: TabItemProps) => {
          return <span
            key={tabItem?.tabId}
            className={`tab-item ${activeTab === tabItem?.tabId ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab(tabItem.tabId)}
          >
            {tabItem.label}
          </span>
        })}
      </div>

      {activeTab === 1 ? <div className="content">
        <div className="left-section">
          <CardsCarousel cardList={tempCardList} setActiveCardId={(id: string | number) => setActiveCardId(id)} />

          <div className="card-actions">
            <div
              className="action"
              onClick={handleFreezeStatus}
            >
              <img src={ICON_SOURCE.freezeCardIcon} alt='card action' />
              <span>{checkIfFreeze() ? "Unfreeze card" : "Freeze card"}</span>
            </div>
            {cardActions.map((card: CardActionProps) => {
              return <div className="action">
                <img src={card.iconSrc} alt='card action' />
                <span>{card.label}</span>
              </div>
            })}
          </div>
        </div>

        <div className="right-section">
          <Dropdown
            title="Card details"
            dropDownId='drop-id-1'
            iconSrc={ICON_SOURCE.cardDetailIcon}
            handleClick={(id: string) => handelDropDownClick(id)}
            open={activeDropdown.includes('drop-id-1')}
          />

          <div className="recent-transactions">
            <div className="transaction-list">
              <Dropdown
                title="Recent transactions"
                dropDownId='drop-id-2'
                iconSrc={ICON_SOURCE.cardDetailIcon}
                handleClick={(id: string) => handelDropDownClick(id)}
                open={activeDropdown.includes('drop-id-2')}
              />

              {activeDropdown.includes('drop-id-2') && <div className="txn-container">
                {getActiveCardsTransactionList().map((txn: TransactionProps, index: number) => {
                  return <div key={index} className="txn-item">
                    <div className="txn-info">
                      <div className="img-container">
                        <img src={txn.merchantLogo} alt='merchant logo' />
                      </div>

                      <div className="txn-content">
                        <p className="merchant">{txn.merchantName}</p>
                        <p className="date">{txn.txnDate}</p>
                        <p className="txn-type">
                          <span className="icon-container">
                            <img src={ICON_SOURCE.businessIcon} alt='business' />
                          </span>
                          <span>{txn.txnType === TxnType.debit ? 'Charged to debit card' : 'Refund on debit card'}</span>
                        </p>
                      </div>
                    </div>

                    <p className={`amount ${txn.txnType === TxnType.debit ? 'debit' : 'credit'}`}>
                      {txn.txnType === TxnType.debit ? '-' : '+'} S$ {txn.txnAmount}
                      <img src={ICON_SOURCE.nextIcon} alt='next' />
                    </p>
                  </div>
                })}
              </div>}
            </div>

            {activeDropdown.includes('drop-id-2') && <div className="all-transactions">
              View all card transactions
            </div>}
          </div>
        </div>
      </div> : <div className="content" style={{ fontSize: '1.4rem' }}>coming soon...</div>}

      {openAddCardModal && <AddCardModal title="Add new card" onSubmit={(cardName: string, cardId: string) => handleAddNewCard(cardName, cardId)} closeModal={() => setOpenAddCardModal(false)}/>}
    </div>
  )
}

export default Cards;