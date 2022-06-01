import React from "react";

export const Pet = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    );
  };

export const SearchParams = () => {
    const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placehwolder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

