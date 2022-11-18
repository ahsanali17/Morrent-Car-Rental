import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { CarsContext } from "../../contexts/CarsContext"
import { ActionKind } from "../../contexts/CarsContext"

export const FilterStyle = styled.div`
  .filters {
    background-color: #dadee2;
    color: #231919;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 10px;
    height: 86vh;
  }
`
export default function Filter() {
  const { dispatch } = useContext(CarsContext)

  const [filterData, setFilterData] = useState({
    sport: false,
    suv: false,
    mvp: false,
    sedan: false,
    coupe: false,
    hatchback: false,
    two: false,
    four: false,
    six: false,
    eight: false,
    price: 0,
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value, type } = e.target
    setFilterData((prevData) => {
      console.log("value:", value, "name:", name)
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }
  useEffect(() => {
    dispatch({ type: ActionKind.Filter_Query, payload: filterData })
  }, [filterData])

  return (
    <FilterStyle>
      <h4>TYPE</h4>
      <form>
        <input
          type="checkbox"
          id="Sport"
          checked={filterData.sport}
          onChange={(e) => {
            handleChange(e)
            console.log(filterData.sport)
          }}
          name="sport"
          value="sport"
        />
        <label htmlFor="Sport">Sport</label>
        <input
          type="checkbox"
          id="SUV"
          checked={filterData.suv}
          onChange={(e) => handleChange(e)}
          name="suv"
          value="suv"
        />
        <label htmlFor="SUV">SUV</label>
        <input
          type="checkbox"
          id="MVP"
          checked={filterData.mvp}
          onChange={(e) => {
            handleChange(e)
          }}
          name="mvp"
          value="mvp"
        />
        <label htmlFor="MVP">MVP</label>
        <input
          type="checkbox"
          id="Sedan"
          checked={filterData.sedan}
          onChange={(e) => handleChange(e)}
          name="sedan"
          value="sedan"
        />
        <label htmlFor="Sedan">Sedan</label>
        <input
          type="checkbox"
          id="Coupe"
          checked={filterData.coupe}
          onChange={(e) => handleChange(e)}
          name="coupe"
          value="coupe"
        />
        <label htmlFor="Coupe">Coupe</label>
        <input
          type="checkbox"
          id="Hatchback"
          checked={filterData.hatchback}
          onChange={(e) => handleChange(e)}
          name="hatchback"
          value="hatchback"
        />
        <label htmlFor="Hatchback">Hatchback</label>
        <br />
      </form>
      <br />
      <hr />

      <h4>CAPACITY</h4>
      <form>
        <input
          type="checkbox"
          id="2"
          checked={filterData.two}
          onChange={(e) => handleChange(e)}
          name="two"
          value={2}
        />
        <label htmlFor="2">2</label>
        <input
          type="checkbox"
          id="4"
          checked={filterData.four}
          onChange={(e) => handleChange(e)}
          name="four"
          value={4}
        />
        <label htmlFor="4">4</label>
        <input
          type="checkbox"
          id="6"
          checked={filterData.six}
          onChange={(e) => handleChange(e)}
          name="six"
          value={6}
        />
        <label htmlFor="6">6</label>
        <input
          type="checkbox"
          id="8"
          checked={filterData.eight}
          onChange={(e) => handleChange(e)}
          name="eight"
          value={8}
        />
        <label htmlFor="8">8</label>
        <br />
      </form>
      <br />
      <hr />

      <h4>Price</h4>
      <form>
        <input
          type="range"
          id="price"
          checked={filterData.coupe}
          onChange={(e) => handleChange(e)}
          name="price"
          value={filterData.price}
        />
        <label htmlFor="2">Price Range- {filterData.price}</label>

        <br />
      </form>
      <br />
      <hr />
    </FilterStyle>
  )
}
