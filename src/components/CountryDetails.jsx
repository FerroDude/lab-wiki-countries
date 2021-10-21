import React from 'react';
import COUNTRY_LIST from './../countries.json';

class CountryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountryDetail();
  }

  loadCountryDetail() {
    const country = COUNTRY_LIST.filter(
      (country) => country.cca3 === this.props.match.params.id
    );

    this.setState({ country: country[0] });
  }
  render() {
    const { country } = this.state;

    return (
      (country && (
        <div>
          <h1>{country.name.common}</h1>
          <h3>
            In {country.name.common} the most common language is{' '}
            {country.languages[Object.keys(country.languages)[0]]}
          </h3>
        </div>
      )) || <h1>Loading...</h1>
    );
  }
}

export default CountryDetails;
