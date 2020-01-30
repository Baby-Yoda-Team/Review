import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ProductDetailsBody, Switcher, TinyBlock } from '../ProductDetails/style';
import { Lines, Bolder, Blue, LargeBolder, ALink, ShippingSection } from './style';

class ShippingAndReturns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: {}
    };
    this.handleShowOrHide = this.handleShowOrHide.bind(this);
  }

  handleShowOrHide() {
    const { clicked } = this.state;
    const { data } = this.props;
    this.setState({
      clicked: !clicked,
      data: data
    });
  }

  render() {
    const { clicked, review, KeyWords } = this.state;
    return (
      <ProductDetailsBody>
        <Switcher>
          <TinyBlock>Shipping & Returns</TinyBlock>
          <TinyBlock className="plus" onClick={this.handleShowOrHide}>
            {clicked ? '-' : '+'}
          </TinyBlock>
        </Switcher>

        <CSSTransition in={clicked} timeout={200} classNames="fade" unmountOnExit>
          <ShippingSection>
            <Lines>
              The estimated delivery time will be approximately 2 - 3 weeks from the time of order.
            </Lines>
            <Lines>
              Standard shipping via common carrier "Threshold Delivery" is included in the quoted
              price.
              <Bolder>
                "Threshold Delivery" includes placement inside your front door or garage. Delivery
                can only be made inside the front door on the ground floor of multi-level housing.
              </Bolder>
              Carrier will call or email to set up a delivery appointment.
              <Blue>
                Please include a daytime phone number in the shipping information at the time of
                check out and please monitor your emails for an opportunity to set your delivery
                appointment.
              </Blue>
              Deliveries are made between the hours of 8 AM to 5 PM, Monday through Friday, and will
              be scheduled as a 4 hour window. Extraordinary delivery requirements may necessitate
              an additional fee to the carrier.
              <Bolder>NOT INCLUDED:</Bolder>
              Placement in your room of choice, removal of packing materials and assembly are NOT
              included.
            </Lines>

            <Lines>Delivery is not available to Puerto Rico, Alaska or Hawaii.</Lines>

            <Lines>
              Costco.com products can be returned to any of our more than 700 Costco warehouses
              worldwide.
            </Lines>
            <LargeBolder>SHOP CONFIDENTLY</LargeBolder>
            <Lines>
              We are committed to offering the best value to our members, with a risk-free 100%
              satisfaction guarantee on both your membership and merchandise. If you have questions
              about your membership or products you've purchased at Costco, please visit the
              membership counter at your local Costco or <ALink>Contact Customer Service.</ALink>
            </Lines>
            <Lines>
              View <ALink>Costco's Return Policy</ALink>
            </Lines>
            <Lines>
              For manufacturer warranty information simply go to View <ALink>Live Chat</ALink> on
              the Costco.com Customer Service page, select Costco Online and then Warranty
              Information.
            </Lines>
            <Lines>
              <ALink>Costco Concierge Services | Technical Support</ALink>
              Free technical support exclusive to Costco members for select electronics and consumer
              goods.
            </Lines>
            <Lines>
              <ALink>How To Return Costco.com Orders</ALink>
            </Lines>
          </ShippingSection>
        </CSSTransition>
      </ProductDetailsBody>
    );
  }
}

export default ShippingAndReturns;
