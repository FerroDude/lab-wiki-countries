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
                <Link to={`/country/${country.cca3}`}>
                  <li
                    className="list-group-item list-group-item-action"
                    key={country.cca3}
                  >
                    {country.name.common}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CountriesListView;
