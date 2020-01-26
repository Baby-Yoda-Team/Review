import React from 'react';
import {
  ProductDetailsBody,
  Switcher,
  TinyBlock,
  DetailsBody,
  LineStyle,
  Icon,
  ALink,
  ListBox,
  PicBox,
  MixPicAndText,
  MixPicAndTextLine
} from '../style';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProductDetailsBody>
        <Switcher>
          <TinyBlock>Product Details</TinyBlock>
          <TinyBlock>+/-</TinyBlock>
        </Switcher>
        <DetailsBody>
          <LineStyle>
            <Icon>X</Icon>
            <span className="Bold">Warning: </span>
            This product can expose you to chemicals including Phthalates and Toluene, which are
            known to the State of California to cause cancer and birth defects or other reproductive
            harm. For more information go to:
            <ALink>www.P65Warnings.ca.gov</ALink>
          </LineStyle>
          <LineStyle>
            <div className="Bold">
              {' '}
              Product details have been supplied by the Manufacturer, and are hosted by a third
              party.
            </div>
          </LineStyle>
          <LineStyle>
            <div className="BolderTitle">
              NordicTrack Z 1300i Treadmill with 1-Year iFit® Coach Included – Assembly Required
            </div>
            <p className="featuresTitle">Features:</p>
            <ListBox>
              <li className="featureList"> 1-Year iFit® Coach Membership Included</li>
              <li className="featureList">Custom-Focus Weight Loss Workouts with Weight Entry</li>
              <li className="featureList">3.0 CHP Motor</li>
              <li className="featureList">20” x 60” Tread Belt</li>
              <li className="featureList">Tablet Not Included</li>
            </ListBox>
            <div className="textBox">
              Get better results with a better coach with the NordicTrack® Z1300i treadmill. A
              lifetime frame and motor warranty, combined with 32 preset workouts, this treadmill is
              built to last. This iFit® Coach enabled treadmill lets you workout anywhere in the
              world through Google Maps™ Street View as well as an ever-expanding library of
              streaming HD workouts that span across 26 countries in all seven continents. You can
              also experience trainer-led studio workouts as well. This treadmill features
              SpaceSaver® technology which allows you to fold up the treadmill and store it out of
              the way.
            </div>
          </LineStyle>
          <PicBox>
            <img className="pic" alt="mianPic" />
          </PicBox>
          <MixPicAndText>
            <MixPicAndTextLine>
              <div className="textSide">
                <div className="textTitle">3.0 CHP - Built to Keep Up: Mile After Mile</div>
                <div className="textBox">
                  3Choose the motor that will run with you from Chicago to Cape Town. Smooth,
                  powerful, durable, and proven, this large-frame motor stays cool through the
                  toughest workouts and creates high levels of inertia for a smooth, powerful feel.
                  Great for heavy use, this motor is built with high-grade components proven with
                  our lifetime motor warranty.
                </div>
                <ListBox>
                  <li className="featureList"> Efficient Electromagnetic DC Motor</li>
                  <li className="featureList">Dynamically Spin-Balanced Assembly</li>
                  <li className="featureList">UL Safety Certified</li>
                </ListBox>
              </div>
              <div className="picSide">picSide</div>
            </MixPicAndTextLine>
            <MixPicAndTextLine>
              <div className="textSide">
                <div className="textTitle">3.0 CHP - Built to Keep Up: Mile After Mile</div>
                <div className="textBox">
                  3Choose the motor that will run with you from Chicago to Cape Town. Smooth,
                  powerful, durable, and proven, this large-frame motor stays cool through the
                  toughest workouts and creates high levels of inertia for a smooth, powerful feel.
                  Great for heavy use, this motor is built with high-grade components proven with
                  our lifetime motor warranty.
                </div>
                <ListBox>
                  <li className="featureList"> Efficient Electromagnetic DC Motor</li>
                  <li className="featureList">Dynamically Spin-Balanced Assembly</li>
                  <li className="featureList">UL Safety Certified</li>
                </ListBox>
              </div>
              <div className="picSide">picSide</div>
            </MixPicAndTextLine>
            <MixPicAndTextLine>
              <div className="textSide">
                <div className="textTitle">3.0 CHP - Built to Keep Up: Mile After Mile</div>
                <div className="textBox">
                  3Choose the motor that will run with you from Chicago to Cape Town. Smooth,
                  powerful, durable, and proven, this large-frame motor stays cool through the
                  toughest workouts and creates high levels of inertia for a smooth, powerful feel.
                  Great for heavy use, this motor is built with high-grade components proven with
                  our lifetime motor warranty.
                </div>
                <ListBox>
                  <li className="featureList"> Efficient Electromagnetic DC Motor</li>
                  <li className="featureList">Dynamically Spin-Balanced Assembly</li>
                  <li className="featureList">UL Safety Certified</li>
                </ListBox>
              </div>
              <div className="picSide">picSide</div>
            </MixPicAndTextLine>
            <MixPicAndTextLine>
              <div className="textSide">
                <div className="textTitle">3.0 CHP - Built to Keep Up: Mile After Mile</div>
                <div className="textBox">
                  3Choose the motor that will run with you from Chicago to Cape Town. Smooth,
                  powerful, durable, and proven, this large-frame motor stays cool through the
                  toughest workouts and creates high levels of inertia for a smooth, powerful feel.
                  Great for heavy use, this motor is built with high-grade components proven with
                  our lifetime motor warranty.
                </div>
                <ListBox>
                  <li className="featureList"> Efficient Electromagnetic DC Motor</li>
                  <li className="featureList">Dynamically Spin-Balanced Assembly</li>
                  <li className="featureList">UL Safety Certified</li>
                </ListBox>
              </div>
              <div className="picSide">picSide</div>
            </MixPicAndTextLine>
          </MixPicAndText>
        </DetailsBody>
      </ProductDetailsBody>
    );
  }
}

export default ProductDetails;
