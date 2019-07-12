import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import SegmentedControl from '../src';

function App() {
  const [value, setValue] = useState();

  return (
    <div>
      <SegmentedControl
        color="secondary"
        options={[
          {
            label: 'First',
            value: 1
          },
          {
            label: 'Second',
            value: 2
          },
          {
            label: 'Third',
            value: 3
          },
          {
            label: 'Fourth',
            value: 4
          }
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default hot(App);
