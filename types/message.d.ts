// set fromself default to false
export interface Message {
    username: string;
    fromself: boolean;
    content: string;
    timestamp: string;
}

export type MessageList = Message[];
