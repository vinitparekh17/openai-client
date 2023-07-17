// set fromself default to false
interface Message {
  username: string;
  fromself: boolean;
  content: string;
  timestamp: string;
}

interface OldMessage {
  _id: string;
  prompt: string;
  user: string;
  answer: string;
}

type OldMessageList = OldMessage[];

type MessageList = Message[];
