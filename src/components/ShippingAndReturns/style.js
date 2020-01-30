import styled from 'styled-components';

export const Lines = styled.div`
  margin: 20px 0;
  line-height: 20px;
`;

export const Bolder = styled.div`
  font-weight: bold;
  display: inline;
`;

export const Blue = styled.div`
  color: #103c84;
  font-weight: bold;
  display: inline;
`;

export const LargeBolder = styled.div`
font-size: 24px;
font-weight: bold;
}
`;

export const ALink = styled.a.attrs({ href: 'http://www.P65Warnings.ca.gov' })`
  text-decoration: none;
  color: #0060a9;
  font-weight: ${props => (props.bold ? 'bolder' : '0')};

  :hover {
    text-decoration: underline;
  }
`;

export const ShippingSection = styled.div`
  padding: 10px;
`;

// export const fixedtext = styled.div`
//   width: 100%;
// `;

// export const fixedtext = styled.div`
//   width: 100%;
// `;
// export const fixedtext = styled.div`
//   width: 100%;
// `;
