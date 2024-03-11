export interface NavItemType {
    id: string | number,
    label: string,
    iconSrc: string,
    path: string,
}

export interface TabItemProps {
    tabId: string | number,
    label: string,
}

export interface CardProps {
    cardId: string,
    basicCardInfo: BasicCardInfo,
    recentTransactions: TransactionProps[],
    freezeCard: boolean,
    spendLimit?: unknown,
}

export interface BasicCardInfo {
    cardOwnerName: string,
    maskedNumber: number,
    unmaskedNumber?: number,
    validThru: string,
    cvv?: number,
    cardLogo: string,
    cardTypeLogo: string,
}

export interface TransactionProps {
    merchantName: string,
    merchantLogo: string,
    txnDate: string,
    txnAmount: number,
    txnType: TxnType,
}

export enum TxnType {
    credit= 'credit',
    debit= 'debit'
}

export interface CardActionProps {
    actionId: string | number,
    label: string,
    iconSrc: string
}