import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  MixPicAndTextLine,
  UserManual,
  Button,
  Lines
} from './style.js';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: {},
      list: [],
      size: {},
      last: [],
      detial: []
    };
    this.handleShowOrHide = this.handleShowOrHide.bind(this);
  }

  handleShowOrHide() {
    const { clicked } = this.state;
    const { data } = this.props;
    this.setState({
      clicked: !clicked,
      data: data,
      list: data.Product_features_list,
      size: data.Product_Size,
      last: data.Product_Last,
      detial: data.Product_features_detial
    });
  }

  render() {
    const { clicked, data, list, last, size, detial } = this.state;
    return (
      <ProductDetailsBody>
        <Switcher>
          <TinyBlock>Product Details</TinyBlock>
          <TinyBlock className="plus" onClick={this.handleShowOrHide}>
            {clicked ? '-' : '+'}
          </TinyBlock>
        </Switcher>

        <CSSTransition in={clicked} timeout={200} classNames="fade" unmountOnExit>
          <DetailsBody>
            <LineStyle>
              <Icon>X</Icon>
              <span className="Bold">Warning: </span>
              This product can expose you to chemicals including Phthalates and Toluene, which are
              known to the State of California to cause cancer and birth defects or other
              reproductive harm. For more information go to:
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
              <div className="BolderTitle">{data.product_name}</div>
              <p className="featuresTitle">Features:</p>
              <ListBox>
                {list.map((item, index) => {
                  return (
                    <li className="featureList" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ListBox>
              <div className="textBox">{data.Product_features_des}</div>
            </LineStyle>
            <PicBox>
              <img className="pic" alt="mianPic" src={data.Product_url} />
            </PicBox>
            <MixPicAndText>
              {detial.map((item, index) => {
                return (
                  <MixPicAndTextLine key={index}>
                    <div className="textSide">
                      <div className="textTitle">{item.Product_features}</div>
                      <div className="textBox">{item.Product_main_description}</div>
                      <ListBox>
                        {item.Product_features_list.map((listItem, listIndex) => {
                          return (
                            <li className="featureList" key={listIndex}>
                              {listItem}
                            </li>
                          );
                        })}
                      </ListBox>
                    </div>
                    <img className="picSide" alt="small pic" src={item.Product_features_smallPic} />
                  </MixPicAndTextLine>
                );
              })}
            </MixPicAndText>
            <LineStyle>
              <div className="BolderTitle borderLine">Warranty</div>
              <p>{data.Product_Warranty}</p>
              <div className="BolderTitle">Footprint</div>
              <p>
                {size.Long}" L x{size.Width}" W x{size.Height}”H
              </p>
              {last.map(item => {
                return (
                  <div key={item._id}>
                    <p className="BolderTitleNoTop">{item.Product_features_title}</p>
                    <div className="textBoxNoBorder ">{item.Product_features_des}</div>
                  </div>
                );
              })}
            </LineStyle>
            <LineStyle>
              <span className="Bold">Warning: </span>
              This product can expose you to chemicals including Phthalates and Toluene, which are
              known to the State of California to cause cancer and birth defects or other
              reproductive harm. For more information go to:
              <ALink>www.P65Warnings.ca.gov</ALink>
            </LineStyle>
            <UserManual>
              <img className="PDF" alt="PDF" src="" />
              <div className="downLoad">
                <Lines>
                  <p className="bolderOnly">User Manual</p>
                  <Switcher>
                    <Button normal rightDistance>
                      view
                    </Button>
                    <ALink as="a" bold href="http://www.google.com">
                      download
                    </ALink>
                  </Switcher>
                  <p className="size">PDF, 9.09 MB, 40 pages</p>
                </Lines>
              </div>
            </UserManual>
          </DetailsBody>
        </CSSTransition>
      </ProductDetailsBody>
    );
  }
}

export default ProductDetails;
