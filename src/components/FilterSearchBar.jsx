import React, { Component } from "react";

class FilterSearchBar extends Component {
  handleClick = (event) => {
    event.stopPropagation();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="btn-group">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "2rem", color: "red", backgroundColor: "transparent", border: "none" }}
            >
              Filtros
            </button>
            <ul className="dropdown-menu">
              <li>
                <label className="dropdown-item" onClick={this.handleClick}>
                  <input type="checkbox" className="form-check-input" style={{ appearance: 'none', width: '1rem', height: '1rem', border: '1px solid #000', marginRight: '0.5rem' }} />
                  Option 1
                </label>
              </li>
              <li>
                <label className="dropdown-item" onClick={this.handleClick}>
                  <input type="checkbox" className="form-check-input" style={{ appearance: 'none', width: '1rem', height: '1rem', border: '1px solid #000', marginRight: '0.5rem' }} />
                  Option 2
                </label>
              </li>
              <li className="text-center">
                <button type="submit" className="btn btn-primary" style={{backgroundColor: "#BB9D0A"}}>
                  Submit
                </button>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search">&#x1F50E;</i>
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default FilterSearchBar;
