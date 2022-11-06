import React, { createContext, useReducer, useEffect } from "react"

const CarsContext = createContext({})
const { Provider } = CarsContext
// const REDUCERCONSTANTS = {
//   GET_ALL_CARS: "GET_ALL_CARS",
// }
type CarsContextProps = {
  children: React.ReactNode
}
type CarType = {
  car_brand: string
  type_car: string
  car_name: string
  seat_capacity: number
  maximum_gasoline: number
}[]
type State = {
  cars: CarType
  cartItems: string[]
}

type Action = {
  type: "GET_ALL_CARS" | "GET_ONE_CAR"
  payload: string[]
}

const initialState:any = {
  cars: [],
  cartItems: [],
}
function carsReducer(state: any, action: any) {
  switch (action.type) {
    case "GET_ALL_CARS":
      return [...state.cars, action.payload]
  }
}

function CarsContextProvider({ children }: CarsContextProps) {
  const [state, dispatch] = useReducer(carsReducer, initialState)
  console.log(state)

  useEffect(() => {
    const fetchcars = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:4000/get/")
        const data: CarType = await response.json()
        if (response.ok) {
          dispatch({ type: "GET_ALL_CARS", payload: data })
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchcars()
  }, [state])

  return (
    <div>
      <Provider value={{...state,dispatch}}>{children}</Provider>
    </div>
  )
}
export { CarsContextProvider, CarsContext }
