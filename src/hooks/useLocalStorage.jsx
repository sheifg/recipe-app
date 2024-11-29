import { useState } from "react";

const getValue = (key, initialValue) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getValue(key, initialValue)
  );

  const setValue = (value) => {
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [localStorageValue, setValue]; //setValue:setter
};

export default useLocalStorage;

// When a user logs in, it is necessary to update the state and to keep the information in the local storage. If the page is refreshed, the user is still logged in
// login -> update the state and update the local storage
