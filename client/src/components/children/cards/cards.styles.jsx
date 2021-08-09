import styled from 'styled-components';

const Container = styled.div`
  border: black solid;
  margin: 1rem;
  border-collapse: collapse;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
  }
  .entry {
    border: 1px solid black;
  }
  button {
    margin: 0 1rem;
    font-size: 0.2rem;
    height: 1.1rem;
  }
`;

export default Container;
