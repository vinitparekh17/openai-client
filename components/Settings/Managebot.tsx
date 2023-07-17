import { useEffect, useState } from 'react';
export function Managebot() {
  const [currentBot, setCurrentBot] = useState(null);
  if (currentBot) {
    return <>Bot</>;
  }
  return <>No bot found</>;
}
