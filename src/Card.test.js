import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

/*************
 * Smoke Test
 *************/
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  
  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Card title='hello' content='hello1' />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

/***************
 * Snapshot Test
 ***************/
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title='hello' content='hello'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
