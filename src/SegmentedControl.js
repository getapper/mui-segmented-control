import React, { useEffect, useState } from 'react';
import {
  arrayOf, func, number, oneOf, oneOfType, shape, string
} from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';

// LIBS
import cn from 'classnames';

export const styles = (theme) => {
  const light = theme.palette.type === 'light';
  const borderColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const buttonSelectedColor = theme.palette.primary.contrastText;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      border: '1px solid',
      borderColor,
      borderRadius: 999
    },
    selector: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 999,
      transition: 'all ease-in .2s',
      zIndex: 1
    },
    selectorPrimary: {
      background: theme.palette.primary.main
    },
    selectorSecondary: {
      background: theme.palette.secondary.main
    },
    buttonContainer: {
      flex: 1
    },
    buttonRoot: {
      borderRadius: 999,
      padding: '10px 20px',
      zIndex: 2
    },
    buttonLabel: {},
    buttonSelected: {
      color: buttonSelectedColor
    }
  };
};

function DegreeSwitch({
  buttonProps,
  classes,
  color,
  onChange,
  options,
  value
}) {
  const [selectorStyle, setSelectorStyle] = useState({});
  const [windowWidth, setWindowWidth] = useState({});
  const buttonRefs = [];
  options.map(() => buttonRefs.push(React.createRef()));

  useEffect(() => {
    const index = options.findIndex(option => option.value === value);
    if (index !== -1) {
      const button = buttonRefs[index].current;
      const width = Math.round(button.getBoundingClientRect().width) + 1;
      const left = Math.round(button.getBoundingClientRect().x
        - button.parentNode.getBoundingClientRect().x) - 1;
      setSelectorStyle({
        width,
        left
      });
    }
  }, [value, windowWidth]);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const selectorColorClass = `selector${capitalize(color)}`;

  return (
    <div className={classes.root}>
      {
        options.map((opt, index) => (
          <Button
            key={opt.value}
            ref={buttonRefs[index]}
            className={cn({
              [classes.buttonSelected]: opt.value === value
            })}
            classes={{
              root: classes.buttonRoot,
              label: classes.buttonLabel
            }}
            fullWidth
            onClick={() => onChange(opt.value)}
            {...buttonProps}
          >{opt.label}
          </Button>
        ))
      }
      {
        value && (
        <div
          className={cn(classes.selector, classes[selectorColorClass])}
          style={selectorStyle}
        />
        )
      }
    </div>
  );
}

DegreeSwitch.propTypes = {
  buttonProps: shape({}),
  classes: shape({}),
  color: oneOf(['primary', 'secondary']),
  onChange: func,
  options: arrayOf(shape({
    label: string,
    value: oneOfType([string, number])
  })).isRequired,
  value: oneOfType([string, number])
};

DegreeSwitch.defaultProps = {
  buttonProps: {},
  classes: {},
  color: 'primary',
  onChange: () => null,
  value: null
};

export default withStyles(styles)(DegreeSwitch);
