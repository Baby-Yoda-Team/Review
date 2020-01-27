import React from 'react';
import Axios from 'axios';
import { OutContainer, LeftContainer } from './style';
import ProductDetails from '../ProductDetails/ProductDetails';

class App extends React.Component {
  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get('/allData')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <OutContainer>
          <LeftContainer>
            <ProductDetails />
          </LeftContainer>
        </OutContainer>
      </>
    );
  }
}

export default App;
