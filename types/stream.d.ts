interface ChunkObj {
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

interface ChunkFinished {
  done: boolean;
}
