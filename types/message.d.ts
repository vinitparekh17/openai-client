type Message = {
  username: string;
  fromself: boolean;
  content: string;
  timestamp: string;
}

type OldMessage = {
  _id: string;
  prompt: string;
  user: string;
  answer: string;
}