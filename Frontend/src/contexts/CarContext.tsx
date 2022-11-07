import React, { createContext, useReducer, useEffect } from "react";

const CarsContext = createContext({});
const { Provider } = CarsContext;
// const REDUCERCONSTANTS = {
//   GET_ALL_CARS: "GET_ALL_CARS",
// }
type CarsContextProps = {
  children: React.ReactNode;
};

type CarType = {
  car_brand: string;
  type_car: string;
  car_name: string;
  seat_capacity: number;
  maximum_gasoline: number;
};

type State = {
  cars: Array<CarType>;
  cartItems: string[];
};

enum ActionKind {
  GetAllCars = "GET_ALL_CARS",
  GetOneCar = "GET_One_CAR",
}

type Action = {
  type: ActionKind;
  payload: Array<CarType>;
};

// type Action = {
//   type: "GET_ALL_CARS" | "GET_ONE_CAR";
//   payload: Array<CarType>;
// };

const initialState: State = {
  cars: [],
  cartItems: [],
};

function carsReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionKind.GetAllCars:
      return { ...state, cars: action.payload };
    default:
      return state;
  }
}

function CarsContextProvider({ children }: CarsContextProps) {
  const [state, dispatch] = useReducer(carsReducer, initialState);
  console.log(state);

  useEffect(() => {
    const fetchcars = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:4000/get/");
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: ActionKind.GetAllCars, payload: data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchcars();
  }, [state]);

  return (
    <div>
      <Provider value={{ ...state, dispatch }}>{children}</Provider>
    </div>
  );
}
export { CarsContextProvider, CarsContext };
