import React from 'react';
import Axios from 'axios';
import { OutContainer, LeftContainer } from './style';
import ProductDetails from '../ProductDetails/ProductDetails';
import Specifications from '../Specifications/Specifications';
import Review from '../Review/Review';
import ShippingAndReturns from '../ShippingAndReturns/ShippingAndReturns';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const x = Math.ceil(Math.random() * 100);
    Axios.get('/allData')
      .then(response => {
        this.setState(() => {
          return { dataList: response.data[x] };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  add(num1, num2) {
    return num1 + num2;
  }

  render() {
    const { dataList } = this.state;
    return (
      <>
        <OutContainer>
          <LeftContainer>
            <ProductDetails data={dataList} />
            <Specifications data={dataList} />
            <Review data={dataList} />
            <ShippingAndReturns data={dataList} />
          </LeftContainer>
        </OutContainer>
      </>
    );
  }
}

export default App;
