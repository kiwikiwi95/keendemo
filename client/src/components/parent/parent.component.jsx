import React from 'react';
import Counter from '../children/counter/counter.component';
import Cards from '../children/cards/cards.component';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Container from './parent.styles';

const Parent = ({ value, setValue }) => {
  const { path } = useRouteMatch();
  return (
    <Container>
      <p>Parent counter value: {value}</p>
      <Switch>
        <Route path={`${path}counter`}>
          <Counter value={value} setValue={setValue} />
        </Route>
        <Route path={`${path}cards`}>
          <Cards />
        </Route>
      </Switch>
    </Container>
  );
};

export default Parent;
