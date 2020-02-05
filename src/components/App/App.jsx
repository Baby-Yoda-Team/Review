import React from 'react';
import Axios from 'axios';
import { OutContainer, LeftContainer } from './style';
import ProductDetails from '../ProductDetails/ProductDetails';
import Specifications from '../Specifications/Specifications';
import Review from '../Review/Review';
import ShippingAndReturns from '../ShippingAndReturns/ShippingAndReturns';

const orUrl = 'http://localhost:8081/allData';

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
    Axios.get(orUrl)
      .then(response => {
        this.setState(() => {
          return { dataList: response.data[x] };
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
