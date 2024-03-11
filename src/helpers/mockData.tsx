import { CardActionProps, CardProps, TxnType } from "../types/navMenuTypes";
import { ICON_SOURCE } from "./constants/imageConstants";

export const cardsList: CardProps[] = [
    {
        cardId: "1",
        basicCardInfo: {
            cardOwnerName: "Mark Henry",
            maskedNumber: 2134,
            unmaskedNumber: 1231123112312134,
            validThru: '12/27',
            cvv: 212,
            cardLogo: ICON_SOURCE.cardLogo,
            cardTypeLogo: ICON_SOURCE.visaLogo,
        },
        recentTransactions: [
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.hamleysLogo,
                txnDate: '11 Mar 2024',
                txnAmount: 150,
                txnType: TxnType.credit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.flightLogo,
                txnDate: '11 Mar 2024',
                txnAmount: 4320,
                txnType: TxnType.debit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.megaPhoneLogo,
                txnDate: '20 Feb 2024',
                txnAmount: 1250,
                txnType: TxnType.debit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.hamleysLogo,
                txnDate: '12 Jan 2024',
                txnAmount: 150,
                txnType: TxnType.debit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.megaPhoneLogo,
                txnDate: '10 Jan 2024',
                txnAmount: 1520,
                txnType: TxnType.credit,
            }
        ],
        freezeCard: false,
    },
    {
        cardId: "2",
        basicCardInfo: {
            cardOwnerName: "Mark Henry",
            maskedNumber: 2323,
            unmaskedNumber: 1232223113412323,
            validThru: '08/25',
            cvv: 470,
            cardLogo: ICON_SOURCE.cardLogo,
            cardTypeLogo: ICON_SOURCE.visaLogo,
        },
        recentTransactions: [
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.megaPhoneLogo,
                txnDate: '10 Jan 2024',
                txnAmount: 1520,
                txnType: TxnType.credit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.hamleysLogo,
                txnDate: '20 Jan 2024',
                txnAmount: 150,
                txnType: TxnType.debit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.megaPhoneLogo,
                txnDate: '20 Dec 2023',
                txnAmount: 1520,
                txnType: TxnType.credit,
            }
        ],
        freezeCard: false,
    },
    {
        cardId: "3",
        basicCardInfo: {
            cardOwnerName: "Mark Henry",
            maskedNumber: 2134,
            unmaskedNumber: 1231123112312134,
            validThru: '10/24',
            cvv: 420,
            cardLogo: ICON_SOURCE.cardLogo,
            cardTypeLogo: ICON_SOURCE.visaLogo,
        },
        recentTransactions: [
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.hamleysLogo,
                txnDate: '20 Feb 2024',
                txnAmount: 250,
                txnType: TxnType.debit,
            },
            {
                merchantName: 'Hamleys',
                merchantLogo: ICON_SOURCE.megaPhoneLogo,
                txnDate: '12 Jan 2024',
                txnAmount: 1200,
                txnType: TxnType.credit,
            }
        ],
        freezeCard: true,
    }
]

export const cardActions: CardActionProps[] = [
    // {
    //     actionId: "1",
    //     label: 'Freeze card',
    //     iconSrc: ICON_SOURCE.freezeCardIcon
    // },
    {
        actionId: "2",
        label: 'Set spend limit',
        iconSrc: ICON_SOURCE.setSpendLimitIcon
    },
    {
        actionId: "3",
        label: 'Add to GPay',
        iconSrc: ICON_SOURCE.gpayIcon
    },
    {
        actionId: "4",
        label: 'Replace card',
        iconSrc: ICON_SOURCE.replaceIcon
    },
    {
        actionId: "5",
        label: 'Cancel card',
        iconSrc: ICON_SOURCE.deleteIcon
    }
]