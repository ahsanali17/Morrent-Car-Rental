import React, { createContext, useContext, useState } from "react";

type VoidFunction = () => void;

type useStateSetter<T> = React.Dispatch<React.SetStateAction<T>>

type ContextProps = {
  children: React.ReactNode;
}

type ContextObjectValue = {
  isOpen: boolean;
  setIsOpen: useStateSetter<boolean> | VoidFunction;
  toggleModal: VoidFunction;
};

const Context = createContext<ContextObjectValue>({
  isOpen: false,
  setIsOpen: () => undefined,
  toggleModal: () => undefined,
});

export const ModalContext = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal: VoidFunction = (): void => {
    setIsOpen((prevVal: boolean) => !prevVal);
  };

  const defaultContextObject: ContextObjectValue = {
    isOpen,
    setIsOpen,
    toggleModal,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const useModalContext = () => useContext(Context);

