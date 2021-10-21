import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountriesList from './../countries.json';

export class CountriesListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: CountriesList,
    };
  }
  render() {
    const { list } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ height: '90vh', overflow: 'scroll' }}>
            <ul className="list-group">
              {' '}
              {list.map((country) => (
                <li
                  key={country.cca3}
                  className="list-group-item list-group-item-action"
                >
                  <Link to={`/country/${country.cca3}`}>
                    {country.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesListView;
