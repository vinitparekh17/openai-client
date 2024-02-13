interface ServerToClientEvents {
  connect: () => void;
  disconnect: (reason: string) => void;
  stream: (data: any) => void;
}

interface ClientToServerEvents {
  stream: (data: any) => void;
}
