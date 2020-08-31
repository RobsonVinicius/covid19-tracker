import React from 'react';

// import Cards from './components/Cars/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

/* Importando tudo de um arquivo só */
import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;