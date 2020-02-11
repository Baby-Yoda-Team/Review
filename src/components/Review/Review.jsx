import React from 'react';
import { CSSTransition, TransitonGroup } from 'react-transition-group';
import { ProductDetailsBody, Switcher, TinyBlock, Button } from '../ProductDetails/style';
import {
  Lines,
  Left,
  Right,
  SectionTitle,
  SectionFilter,
  SectionBody,
  ReviewSection,
  ReviewBlock,
  LeftSide,
  RightSide,
  ReviewLines,
  BlueCh,
  ButtonLines
} from './style.js';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: {},
      review: [],
      keyWords: []
    };
    this.handleShowOrHide = this.handleShowOrHide.bind(this);
  }

  handleShowOrHide() {
    const { clicked } = this.state;
    const { data } = this.props;
    this.setState({
      clicked: !clicked,
      data: data,
      review: data.Review
    });
  }

  render() {
    const { clicked, review, KeyWords } = this.state;
    return (
      <ProductDetailsBody>
        <Switcher>
          <TinyBlock>Review</TinyBlock>
          <TinyBlock className="plus" onClick={this.handleShowOrHide}>
            {clicked ? '-' : '+'}
          </TinyBlock>
        </Switcher>

        <CSSTransition in={clicked} timeout={200} classNames="fade" unmountOnExit>
          <div>
            <Lines>
              <Left>Reviews</Left>
              <Right>
                <Button blue>Write a review</Button>
              </Right>
            </Lines>
            <Lines>
              <Left>
                <SectionTitle>Rating Snapshot</SectionTitle>
                <SectionFilter>Select a row below to filter reviews.</SectionFilter>
                <SectionBody>SectionBody</SectionBody>
              </Left>
              <Right>
                <SectionTitle>Average Customer Ratings</SectionTitle>
                <SectionBody>Overall ★★★★★ 3.5</SectionBody>
              </Right>
            </Lines>
            <Lines>
              <Left>1–8 of 8 Reviews </Left>
              <Right>? Sort by: Most Relevant ▼ Menu</Right>
            </Lines>
            <ReviewSection>
              {review.map(item => {
                return (
                  <ReviewBlock key={item.Id}>
                    <LeftSide>
                      <img className="Avntar" alt="userPic" src={item.UserImg} />
                    </LeftSide>
                    <RightSide>
                      <ReviewLines>
                        <BlueCh>★★★★★</BlueCh>
                        {item.UserName}·{item.ago} days ago
                      </ReviewLines>
                      <ReviewLines className="extraTop">{item.reviewBody}</ReviewLines>
                      <ReviewLines className="extraBoth">
                        {item.recommend
                          ? '✔ Yes, I recommend this product.'
                          : 'No,I don`t recommend this product.'}
                      </ReviewLines>
                      <ButtonLines>
                        Helpful?
                        <Button>Yes.{item.Helpful.Yes}</Button>
                        <Button>No.{item.Helpful.No}</Button>
                        <Button>Report</Button>
                      </ButtonLines>
                    </RightSide>
                  </ReviewBlock>
                );
              })}
            </ReviewSection>
          </div>
        </CSSTransition>
      </ProductDetailsBody>
    );
  }
}

export default Review;
