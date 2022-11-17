import { createContext, useContext, useReducer } from "react";

import { ContextProps, Dispatch } from '../types/index';

type ActionTypesTypes = {
  location1: 'LOCATION_ONE';
  location2: 'LOCATION_TWO';
  date1: 'DATE_ONE';
  date2: 'DATE_TWO';
  time1: 'TIME_ONE';
  time2: 'TIME_TWO';
};

const ActionTypes: ActionTypesTypes = {
  location1: 'LOCATION_ONE',
  location2: 'LOCATION_TWO',
  date1: 'DATE_ONE',
  date2: 'DATE_TWO',
  time1: 'TIME_ONE',
  time2: 'TIME_TWO',
}

type StateType = {
  location1: string;
  location2: string;
  date1: string;
  date2: string;
  time1: string;
  time2: string;
};

const initialState: StateType = {
  location1: '',
  location2: '',
  date1: '',
  date2: '',
  time1: '',
  time2: '',
};

type ActionIdx = 'location1' | 'location2' | 'date1' | 'date2' | 'time1' | 'time2';

type Action = {
  type:  ActionTypesTypes[ActionIdx];
  payload: string;
}

type ContextObject = {
  locationOneChange: null | Dispatch;
  locationTwoChange: null | Dispatch;
  dateOneChange: null | Dispatch;
  dateTwoChange: null | Dispatch;
  timeOneChange: null | Dispatch;
  timeTwoChange: null | Dispatch;
  initialState: StateType;
}

const defaultContextObj: ContextObject = {
  locationOneChange: null,
  locationTwoChange: null,
  dateOneChange: null,
  dateTwoChange: null,
  timeOneChange: null,
  timeTwoChange: null,
  initialState,
};

const Context = createContext(defaultContextObj);

const PickUpDropOffReducer = (state: StateType, action: Action): StateType => {
  switch(action.type) {
    case 'LOCATION_ONE': 
      state.location1 = action.payload;
      return state;
    case 'LOCATION_TWO': 
      state.location2 = action.payload;
      return state;
    default: {
      return state;
    }
  }
}

export const PickUpDropOffContext = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(PickUpDropOffReducer, initialState);
  
  const locationOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.location1, payload: payload });
  const locationTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.location2, payload: payload });
  const dateOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.date1, payload: payload });
  const dateTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.date2, payload: payload });
  const timeOneChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.time1, payload: payload });
  const timeTwoChange: Dispatch = (payload: string) => dispatch({ type: ActionTypes.time2, payload: payload });

  const defaultContextObject = {
    locationOneChange,
    locationTwoChange,
    dateOneChange,
    dateTwoChange,
    timeOneChange,
    timeTwoChange,
    initialState,
  };

  return (
    <Context.Provider
      value={defaultContextObject}>
      {children}
    </Context.Provider>
  )
}

export const usePickUpDropOffContext = () => useContext(Context);

