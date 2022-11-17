import { createContext, useContext, useState } from "react";

import { VoidFunction, ContextProps } from '../types/index';

type ContextObjectValue = {
  openMenu: boolean;
  openMenu2: boolean;
  handleOpenMenu:  VoidFunction;
  handleOpenMenu2:  VoidFunction;
};

const Context = createContext<ContextObjectValue>({
  openMenu: false,
  openMenu2: false,
  handleOpenMenu: () => undefined,
  handleOpenMenu2: () => undefined,
});

export const DropDownContext = ({ children }: ContextProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const handleOpenMenu: VoidFunction = (): void => {
    setOpenMenu((prevValue: boolean) => !prevValue);
  }

  const handleOpenMenu2: VoidFunction = (): void => {
    setOpenMenu2((prevValue: boolean) => !prevValue);
  }

  const defaultContextObject: ContextObjectValue = {
    openMenu,
    openMenu2,
    handleOpenMenu,
    handleOpenMenu2,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const useDropDownContext = () => useContext(Context);

