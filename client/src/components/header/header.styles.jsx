import styled from 'styled-components';

const Nav = styled.ul`
  display: flex;
  padding: 0;

  a {
    text-decoration: none;
  }

  li {
    margin: 1rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .active {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

export default Nav;
