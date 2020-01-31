import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount } from 'enzyme';
import App from '../src/components/App/App';
import ProductDetails from '../src/components/ProductDetails/ProductDetails';
import Review from '../src/components/Review/Review';
import ShippingAndReturns from '../src/components/ShippingAndReturns/ShippingAndReturns';
import Specifications from '../src/components/Specifications/Specifications';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('OutContainer component loaded', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.sc-AykKC')).toHaveLength(1);
  });

  test('LeftContainer component loaded', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.sc-AykKD')).toHaveLength(1);
  });
});

describe('ProductDetails', () => {
  test('ProductDetails component loaded', () => {
    const wrapper = mount(<ProductDetails />);
    expect(wrapper.find('.ezwAIb')).toHaveLength(2);
  });
});

describe('Review', () => {
  test('Review component loaded', () => {
    const wrapper = mount(<Review />);
    expect(wrapper.find('.cgakGK')).toHaveLength(1);
  });
});

describe('Specifications', () => {
  test('Specifications component loaded', () => {
    const wrapper = mount(<Specifications />);
    expect(wrapper.find('.sc-AykKF')).toHaveLength(1);
  });
});

describe('ShippingAndReturns', () => {
  test('ShippingAndReturns component loaded', () => {
    const wrapper = mount(<ShippingAndReturns />);
    expect(wrapper.find('.sc-AykKF')).toHaveLength(1);
  });
});
