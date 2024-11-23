import React from "react";
import style from "../../style.module.scss";
import classNames from "classnames";

const Stepper = ({ number, content, isDisable }) => {
  const {
    stepper,
    numberStepper,
    textStepper,
    isDisableNumber,
    isDisableText,
  } = style;
  return (
    <div className={stepper}>
      <div
        className={classNames(numberStepper, { [isDisableNumber]: isDisable })}
      >
        {number}
      </div>
      <div className={classNames(textStepper, { [isDisableText]: isDisable })}>
        {content}
      </div>
    </div>
  );
};

export default Stepper;
