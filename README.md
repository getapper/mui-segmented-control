# Material UI - Segmented Control

A MUI component made with hooks compatible with MUI >= 4.0.0

## Install 

```sh
npm install mui-segmented-control
```

## Usage

```jsx
import React, { useState } from 'react';
import SegmentedControl from './SegmentedControl';

function App() {
  const [value, setValue] = useState();

  return (
    <div>
      <SegmentedControl
        color="primary"
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
```

## Props

