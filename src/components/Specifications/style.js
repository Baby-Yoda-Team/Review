import styled from 'styled-components';

export const LineBody = styled.ol`
  width: 100%;
  li:nth-child(odd) {
    background-color: #fafafa;
  }
  box-sizing: border-box;
  padding-bottom: 40px;
`;

export const Lines = styled.li`
  list-style: none;
  width: 40%;
  display: flex;
  justify-content: unset;
  flex-direction: row;
  padding: 5px 0;
`;

export const LeftSide = styled.div`
  color: green;

  line-height: 40px;
  height: 40px;
`;

export const RightSide = styled.div`
  line-height: 40px;
  height: 40px;
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

// export const fixedtext = styled.div`
//   width: 100%;
// `;

// export const fixedtext = styled.div`
//   width: 100%;
// `;
