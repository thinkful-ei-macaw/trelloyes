import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import List from './List';
import renderer from 'react-test-renderer';

/*************
 * Smoke Test
 *************/
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List cards = {[{id: 'a', title: 'First card', content: 'lorem ipsum'}]} />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

/***************
 * Snapshot Test
 ***************/
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List cards = {[{id: 'a', title: 'First card', content: 'lorem ipsum'}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});