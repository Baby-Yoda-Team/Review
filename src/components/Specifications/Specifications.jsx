import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProductDetailsBody, Switcher, TinyBlock } from '../ProductDetails/style';
import { LineBody, Lines, LeftSide, RightSide } from './style';

class Specifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: {},
      Features: []
    };
    this.handleShowOrHide = this.handleShowOrHide.bind(this);
  }

  handleShowOrHide() {
    const { clicked } = this.state;
    const { data } = this.props;
    const Features = data.Specifications.Features;
    this.setState({
      clicked: !clicked,
      data: data.Specifications,
      Features
    });
  }

  render() {
    const { clicked, data, Features } = this.state;
    return (
      <ProductDetailsBody>
        <Switcher>
          <TinyBlock>Specifications</TinyBlock>
          <TinyBlock className="plus" onClick={this.handleShowOrHide}>
            {clicked ? '-' : '+'}
          </TinyBlock>
        </Switcher>
        <CSSTransition in={clicked} timeout={200} classNames="fade" unmountOnExit>
          <LineBody>
            <Lines>
              <LeftSide>Brand:</LeftSide>
              <RightSide>{data.Brand}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Dimensions Height:</LeftSide>
              <RightSide>{data.Dimensions_Height}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Dimensions Width:</LeftSide>
              <RightSide>{data.Dimensions_Width}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Horsepower:</LeftSide>
              <RightSide>{data.Horsepower}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Maximum Incline:</LeftSide>
              <RightSide>{data.Maximum_Incline}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Maximum Speed:</LeftSide>
              <RightSide>{data.Maximum_Speed}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Number of Programs:</LeftSide>
              <RightSide>{data.Number_of_Programs}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Running Surface Length:</LeftSide>
              <RightSide>{data.Running_Surface_Length}</RightSide>
            </Lines>
            <Lines>
              <LeftSide>Running Surface Width:</LeftSide>
              <RightSide>{data.Running_Surface_Width}</RightSide>
            </Lines>
          </LineBody>
        </CSSTransition>
      </ProductDetailsBody>
    );
  }
}

export default Specifications;
