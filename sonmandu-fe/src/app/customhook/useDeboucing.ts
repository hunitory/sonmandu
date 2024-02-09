import React, { useEffect } from 'react';

interface UseDebouncingArgs {
  value: any;
  delay: number;
  callback: (...args: any[]) => void;
}

function useDebouncing({ value, delay, callback }: UseDebouncingArgs) {
  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setTimeout(callback, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return;
}

export default useDebouncing;
