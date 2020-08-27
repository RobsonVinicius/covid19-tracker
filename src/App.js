import React from 'react';

// import Cards from './components/Cars/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

/* Importando tudo de um arquivo só */
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchData = await fetchData();

    this.setState({ data: fetchData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container} /*previnir interferência*/>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;