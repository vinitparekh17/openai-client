type Message = {
  fromself: boolean;
  content: string;
  timestamp: string;
};

type OldMessage = {
  _id: string;
  prompt: string;
  answer: string;
  date: string;
};

type ChatFormProps = {
  socket: MutableRefObject<Socket>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

type TranscriptFormat = {
  user: UserData;
  messages: OldMessage[];
}