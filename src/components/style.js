import styled from 'styled-components';

export const ProductDetailsBody = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, Roboto, sans-serif;
  width: 100%;

  .fade-entry {
    transition: all 0.2s ease-out;
  }

  .fade-enter-active {
    opacity: 0;
  }

  .fade-enter-done {
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 0.2s ease-in;
  }

  .fade-exit-done {
    opacity: 0;
  }
`;

export const Switcher = styled.div`
  display: flex;
  align-items: baseline;
  box-sizing: content-box;
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
    color: #333;
    font-size: 20px;
    font-weight: 600;
    margin-top: 40px;
  }
  .BolderTitleNoTop {
    color: #333;
    font-size: 20px;
    font-weight: 600;
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
  .borderLine {
    border-top: 1px solid #333;
    padding-top: 30px;
  }
  .textBoxNoBorder {
    margin-top: 10px;
    line-height: 28px;
    padding-bottom: 30px;
  }
`;

export const TitleSize = styled.div`
  width: 100%;
`;

export const ALink = styled.a.attrs({ href: 'http://www.P65Warnings.ca.gov' })`
  text-decoration: none;
  color: #0060a9;
  font-weight: ${props => (props.bold ? 'bolder' : '0')};

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
    width: 49%;
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
    width: 49%;
    background-color: blue;
  }
`;

export const UserManual = styled.div`
  display: flex;
  .PDF {
    min-width: 72px;
    min-height: 72px;
    background-color: pink;
  }
`;

export const Bottom = styled.div`
  border-bottom: 1px solid #333;
  margin-top: 30px;
  opacity: 0.6;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  background: ${props => (props.danger ? 'red' : 'white')};
  color: ${props => (props.primary ? 'white' : 'red')};

  margin-right: ${props => (props.rightDistance ? '10px' : '0')};

  font-size: 16px;
  font-weight: bolder;
  color: #333;
  background-color: #fff;
  height: 45px;
  width: 70px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

export const Lines = styled.div`
  .bolderOnly {
    font-weight: bold;
    padding: 0 10px;
    margin-top: 0;
  }
  .size {
    font-size: 10px;
    opacity: 0.6;
    padding: 0 10px;
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
