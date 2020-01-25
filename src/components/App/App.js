
import React, { Fragment } from "react";
import Axios from 'axios';
import {
  Button,
  OutContainer,
  LeftContainer,
  RightContainer,
} from '../style'

class App extends React.Component {
  componentDidMount() {
    this.getData();
  }
  getData() {
    Axios.get('/allData')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {
    return (
      <Fragment>
        <OutContainer>
          <LeftContainer>this left</LeftContainer>
          
        </OutContainer>
      </Fragment>
    );
  }
}

export default App
