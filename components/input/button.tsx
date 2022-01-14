import React from 'react';
import { ButtonModel } from '../../model/input/button-model';
import MarginBottom from '../layout/margin-bottom';

const Button = (props: ButtonModel) => {
  return (
    <>
      <button
        className={`global-button ${props.disabled ? props.className + ' ' + 'disabled' : props.className}`}
        onClick={() => props.onClick()}
        disabled={props.disabled}
      >
        <span className={props.span}>
          {props.label}
          {props.img && <img src={props.src} />}
        </span>
      </button>

      {props.marginBottom && <MarginBottom margin={props.marginBottom} />}
    </>
  );
};

export default Button;
