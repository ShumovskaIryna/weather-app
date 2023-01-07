/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { ChangeEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Suggestions from '../Suggestions/Suggestions'
import { optionType } from './../../store/types/types'

interface Props {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  addCity: (city: string) => void
}

function Header ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  addCity
}: Props): JSX.Element {
  const submitHandler = (event: React.SyntheticEvent): void => {
    const target = event.target as typeof event.target & {
      city: { value: string }
    }
    addCity(target.city.value)
  }

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <NavLink to="/" className="logo">Weather</NavLink>
      </div>
      <div className="headerCenter">
        <form onSubmit={submitHandler}>
          <div className="searchbar">
            <SearchIcon sx={{ mr: 1, ml: 2, fontSize: 28 }} />
            <input
              type="text"
              value={term}
              name="city"
              className="searchInput"
              onChange={onInputChange}
              placeholder="Search for city"
            />
            <Suggestions options={options} onSelect={onOptionSelect} />
            <button
              className="search_btn"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Header
