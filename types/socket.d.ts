export interface ClientToServerEvents {
    'connect': () => void;
    'disconnect': () => void;
    'send-message': (message: string) => void;
}

export interface ServerToClientEvents {
    'receive-message': (message: string) => void;
}

export interface SocketState {
    socket: React.MutableRefObject<Socket>
}