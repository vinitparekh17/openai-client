// set fromself default to false
export interface Message {
    username: string;
    fromself: boolean;
    content: string;
    timestamp: string;
}

export interface OldMessage {
        _id: string;
        prompt: string;
        user: string;
        answer: string;
}

export type OldMessageList = OldMessage[];

export type MessageList = Message[];
