import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  //store key paired value key
  const stored = localStorage.getItem(key);
  //if truthy, parse it & set value, else set a default value
  const initial = stored ? JSON.parse(stored) : defaultValue;
  //create new snapshot of value
  const [value, setValue] = useState(initial);
  //run side effect to set new value
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  //return the value
  return [value, setValue];
};
