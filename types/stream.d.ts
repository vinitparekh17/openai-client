export interface ChunkObj {
  data: {
    choices: [
      {
        delta: {
          content?: string;
        };
      },
    ];
  };
}

export interface ChunkFinished {
  done: boolean;
}
