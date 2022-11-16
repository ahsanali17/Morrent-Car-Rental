import { createContext, useContext, useState } from "react";

import { VoidFunction, useStateSetter, ContextProps } from '../types/index';

type ContextObjectValue = {
  openMenu: boolean;
  setOpenMenu: useStateSetter<boolean> | VoidFunction;
  handleOpenMenu:  VoidFunction;
};

const Context = createContext<ContextObjectValue>({
  openMenu: false,
  setOpenMenu: () => undefined,
  handleOpenMenu: () => undefined,
});

export const DropDownContext = ({ children }: ContextProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu: VoidFunction = (): void => {
    setOpenMenu((prevValue: boolean) => !prevValue);
  }

  const defaultContextObject: ContextObjectValue = {
    openMenu,
    setOpenMenu,
    handleOpenMenu,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const useDropDownContext = () => useContext(Context);

