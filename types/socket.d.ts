export interface ServerToClientEvents {
    "connect": () => void;
    "disconnect": (reason: string) => void;
    "stream": (data: any) => void;
}

export interface ClientToServerEvents {
    "stream": (data: any) => void;
}