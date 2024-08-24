export type TransactionId = string;

export type TransactionDatetime = {
    date: string;
    timezone_type: number;
    timezone: string;
}

export type LocationUpdate = {
    location: string;
}

export type Transaction = {
    id: TransactionId;
    code: string;
    amount: number;
    location: string | null;
    latitude: string;
    longitude: string;
    datetime: TransactionDatetime;
}

export type TransactionList = Array<Transaction>;
