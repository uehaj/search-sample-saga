import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { configureStore } from './store';
import { changeInput } from './actions';

const SearchPedia = ({ word, result, changeInput }) => {
  return (
    <div>
      <input value={ word } onChange={ e => changeInput(e.target.value)} />
      <h3>Result</h3>
      <ul>
        {result.map( (r, i) => <li key={r}>{r}</li>)}
      </ul>
    </div>
  );
};

// Container
const SearchPediaContainer = connect(
  state => state,
  { changeInput }
)(SearchPedia);

// Provider
export default class App extends React.Component {
  constructor(){
    super();
    this.store = configureStore();
  }
  render(){
    return (
      <Provider store={this.store} >
        <SearchPediaContainer />
      </Provider>
    );
  }
};
