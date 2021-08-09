import styled from 'styled-components';

const Box = styled.div`
  display: flex;

  button {
    margin: 1rem;
  }

  div {
    p {
      padding: 1rem;
      width: 1.5rem;
      border: black solid;
    }
    display: inline-block;
    text-align: center;
    .counterLabel {
      display: block;
    }
  }

  .operator {
    color: white;
    font-size: 1.5rem;
    background-color: black;
  }
  .minus {
    border-radius: 100%;
  }
`;

export default Box;
