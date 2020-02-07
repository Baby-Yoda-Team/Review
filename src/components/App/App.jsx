import React from 'react';
import Axios from 'axios';
import { OutContainer, LeftContainer } from './style';
import ProductDetails from '../ProductDetails/ProductDetails';
import Specifications from '../Specifications/Specifications';
import Review from '../Review/Review';
import ShippingAndReturns from '../ShippingAndReturns/ShippingAndReturns';

const port = 8081;

const url = `http://localhost:${port}`;

const params = new URLSearchParams(window.location.search);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemNumber: params.get('item_number'),
      dataObject: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { itemNumber } = this.state;
    const x = Math.ceil(Math.random() * 100);
    Axios.get(`/api?item_number=${itemNumber || x}`)
      .then(response => {
        this.setState(() => {
          return { dataObject: response.data };
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { dataObject } = this.state;
    return (
      <>
        <OutContainer>
          <LeftContainer>
            <ProductDetails data={dataObject} />
            <Specifications data={dataObject} />
            <Review data={dataObject} />
            <ShippingAndReturns data={dataObject} />
          </LeftContainer>
        </OutContainer>
      </>
    );
  }
}

export default App;
