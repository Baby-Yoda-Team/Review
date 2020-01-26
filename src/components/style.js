import styled from 'styled-components';

export const ProductDetailsBody = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, Roboto, sans-serif;
  width: 100%;
`;

export const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;
  color: #333;
`;

export const TinyBlock = styled.div`
  text-align: end;
`;

export const Icon = styled.div`
  display: inline-block;
`;

export const DetailsBody = styled.div`
  padding: 13px;
`;

export const fixedtext = styled.div`
  width: 100%;
`;

export const LineStyle = styled.div`
  line-height: 23px;
  .Bold {
    font-weight: bold;
    margin-top: 50px;
  }
  .BolderTitle {
    olor: #333;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
  }
  .featuresTitle {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .textBox {
    margin-top: 10px;
    line-height: 28px;
    border-bottom: 1px solid #333;
    padding-bottom: 30px;
  }
`;

export const TitleSize = styled.div`
  width: 100%;
`;

export const ALink = styled.a.attrs({ href: 'http://www.P65Warnings.ca.gov' })`
  text-decoration: none;
  color: #0060a9;
  :hover {
    text-decoration: underline;
  }
`;

export const ListBox = styled.div`
  .featureList {
    padding-left: 30px;
    line-height: 26px;
  }
`;

export const PicBox = styled.div`
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  .pic {
    width: 500px;
    height: 500px;
    min-height: 500px;
    min-width: 500px;
    background-color: red;
  }
`;

export const MixPicAndText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MixPicAndTextLine = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 40px;
  &:nth-child(even) {
    display: flex;
    flex-direction: row-reverse;
  }
  .textSide {
    width: 50%;
    .textTitle {
      ont-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    .textBox {
      margin-top: 10px;
      line-height: 28px;
    }
  }
  .picSide {
    width: 50%;
    background-color: blue;
  }
`;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;

// export const TitleSize = styled.div`
//   width: 100%;
// `;
