import React from 'react';
import { InjectedCounterProps, RnderPropsCounter } from './RenderPropsCounter';

interface CounterProps extends InjectedCounterProps {
    style: React.CSSProperties;
  }
  
  const Counter = (props: CounterProps) => (
    <div style={props.style}>
      <button onClick={props.onDecrement}> - </button>
      {props.value}
      <button onClick={props.onIncrement}> + </button>
    </div>
  );
  
  interface WrappedCounterProps extends CounterProps {
    minValue?: number;
    maxValue?: number;
  }
  
  const WrappedCounter = ({
    minValue,
    maxValue,
    ...props
  }: WrappedCounterProps) => (
    <RnderPropsCounter minValue={minValue} maxValue={maxValue}>
      {(injectedProps: JSX.IntrinsicAttributes & CounterProps) => <Counter {...props} {...injectedProps} />}
    </RnderPropsCounter>
  );