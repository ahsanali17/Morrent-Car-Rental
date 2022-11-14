import { ActionCreator } from "@reduxjs/toolkit"
import React, { createContext, useReducer, useEffect, useState } from "react"
//done
enum ActionKind {
  GetAllCars = "GET_ALL_CARS",
  GetOneCar = "GET_One_CAR",
  AddToCart = "ADD_TO_CART",
  Is_Favourite = " IS_FAVOURITE",
  Create_Car = "CREATE_CAR",
  Delete_Car = "DELETE_CAR",
  Add_to_Query = "ADD_TO_QUERY",
  Add_To_Search = "ADD_TO_SEARCH",
}

//car object type
export type CarType = {
  _id: number
  car_brand: string
  type_car: string
  car_name: string
  seat_capacity: number
  maximum_gasoline: number
  daily_rate: number
  isFavourite: boolean
}

// Array of objects for cars + array of object of cars to be added in cart
export type State = {
  cars: CarType[]
  cartItems: CarType[]
  searchItems: CarType[]
  query: string
}

//--
const initialState: State = {
  cars: [],
  cartItems: [],
  searchItems: [],
  query: "",
}

type CarsContextProviderProps = {
  children: React.ReactNode
}

// for value to be provided by the provider
type CarsContextType = {
  cars: CarType[]
  cartItems: CarType[]
  searchItems: CarType[]
  query: string
  addToFavourite: (id: number) => void
  createCar: (car: CarType, e: React.FormEvent<HTMLInputElement>) => void
  deleteCar: (id: number) => void
  addToQuery: (q: string) => void
  addToSearch: (s: CarType[]) => void
}

const CarsContext = createContext<CarsContextType>({} as CarsContextType)
const { Provider } = CarsContext

type QueryAction = {
  type: ActionKind.Add_to_Query
  payload: string
}

type CarAction = {
  type:
    | ActionKind.AddToCart
    | ActionKind.Create_Car
    | ActionKind.Delete_Car
    | ActionKind.GetAllCars
    | ActionKind.GetOneCar
    | ActionKind.Is_Favourite
    | ActionKind.Add_To_Search
  payload: CarType[]
}
type Action = CarAction | QueryAction

function carsReducer(state: State, action: Action): State {
  switch (action.type) {
    //get All cars
    case ActionKind.GetAllCars:
      return { ...state, cars: action.payload }
    //create a car
    case ActionKind.Create_Car:
      return { ...state, cars: action.payload }
    //Delete a car from the list
    case ActionKind.Delete_Car:
      return { ...state, cars: action.payload }
    //update the cars array with isFavourite value
    case ActionKind.Is_Favourite:
      return { ...state, cars: action.payload }
    case ActionKind.Add_To_Search:
      return { ...state, searchItems: action.payload }
    case ActionKind.Add_to_Query:
      return { ...state, query: action.payload }

    default:
      return state
  }
}

function CarsContextProvider({ children }: CarsContextProviderProps) {
  const [state, dispatch] = useReducer(carsReducer, initialState)
  console.log(state)
  // useEffect will run for the first time when this context component renders
  useEffect(() => {
    const fetchcars = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:4000/get")
        const data = await response.json()
        if (response.ok) {
          dispatch({ type: ActionKind.GetAllCars, payload: data })
        }
      } catch (error) {
        console.log(error) // Here we receive the error from the backend and can setan error /modal to show the error to user
      }
    }
    fetchcars()
  }, [])

  // This function takes the car object filled with all the key value pairs as car argument and creates post request-
  //to be used in the create form component
  const createCar = async (
    car: CarType,
    e: React.FormEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault()

    //RTKQ hook to update the backend model to post a new car creation
    try {
      const response = await fetch("/create/", {
        method: "POST",
        body: JSON.stringify(car),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        const newCar = await response.json()
        //update the store using dospatch
        const updateCars = [...state.cars, newCar]
        dispatch({ type: ActionKind.Create_Car, payload: updateCars })
      }
    } catch (error) {
      console.log(error)
    }
  }

  //This function takes the id from the component and delete a car from the list
  const deleteCar = async (id: number): Promise<void> => {
    const response = await fetch(`/delete/${id}`, {
      method: "DELETE",
    })

    if (response.ok) {
      const json = await response.json()
      const updatedCars = state.cars.filter((car) => id != car._id)
      dispatch({ type: ActionKind.Delete_Car, payload: updatedCars })
    }
  }

  //This function takes in the id from the carCard and updates the isFavourite value in the selected car component

  const addToFavourite = async (id: number): Promise<void> => {
    const carsUpdatedList = state.cars.map((car) => {
      if (id == car._id) {
        // update the local storage
        localStorage.setItem(`${car._id}`, JSON.stringify(!car.isFavourite))
        return { ...car, isFavourite: !car.isFavourite }
      }
      return car
    })
    //RTKQ hook to update the backend model to patch
    const updatedCar = state.cars.filter((car) => id == car._id)
    const response = await fetch(`/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedCar[0]),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const json = response.json()
      //dispatch to update the store
      dispatch({ type: ActionKind.Is_Favourite, payload: carsUpdatedList })
    }
  }

  const addToQuery = (q: string) => {
    dispatch({ type: ActionKind.Add_to_Query, payload: q })
  }

  const addToSearch = (s: CarType[]) => {
    dispatch({ type: ActionKind.Add_To_Search, payload: s })
  }

  return (
    <div>
      <Provider
        value={{ ...state, addToFavourite, createCar, deleteCar, addToQuery,addToSearch }}
      >
        {children}
      </Provider>
    </div>
  )
}

export { CarsContextProvider, CarsContext }
