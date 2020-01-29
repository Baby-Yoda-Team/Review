import React from 'react';
import Axios from 'axios';
import { OutContainer, LeftContainer } from './style';
import ProductDetails from '../ProductDetails/ProductDetails';
import Specifications from '../Specifications/Specifications';

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

  render() {
    const { dataList } = this.state;
    return (
      <>
        <OutContainer>
          <LeftContainer>
            <ProductDetails data={dataList} />
            <Specifications data={dataList} />
          </LeftContainer>
        </OutContainer>
      </>
    );
  }
}

export default App;
