# Material UI - Segmented Control

A MUI component made with hooks compatible with MUI >= 4.0.0

## Demo

[![Edit magical-poitras-685c4](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/magical-poitras-685c4?fontsize=14)

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

| Prop  | Description | Default value |
| --- | ------ | --- |
| buttonProps | props injected to the button component | {} |
| classes | classes object for custom styling | {} |
| color | Selector color ['primary', 'secondary'] | 'primary'
| onChange | callback to handle option click | () => null
| options | options array of objects in the form: {label, value} | []
| value | selected value that will be shown in the component | null
