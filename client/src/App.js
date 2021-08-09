import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Parent from './components/parent/parent.component';

function App () {
  const [value, setValue] = useState(0);
  return (
    <Router>
      <div>
        <Header value={value} />
        <hr />
        <Switch>
          <Route
            path='/'
            render={() => <Parent value={value} setValue={setValue} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
