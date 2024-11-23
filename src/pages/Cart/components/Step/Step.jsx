import React from "react";
import style from "../../style.module.scss";
import Stepper from "@/pages/Cart/components/Step/Stepper";

const Step = () => {
  const { containerStepsCart, steps, line, textNotification } = style;

  const dataSteps = [
    { number: 1, content: "shopping cart" },
    { number: 2, content: "check out" },
    { number: 3, content: "order status" },
  ];
  return (
    <div className={containerStepsCart}>
      <div className={steps}>
        {dataSteps.map((item, index) => {
          return (
            <>
              <Stepper
                key={index}
                number={item.number}
                content={item.content}
                isDisable={index !== 0}
              />
              {index !== dataSteps.length - 1 && <div className={line}></div>}
            </>
          );
        })}
      </div>
      <div className={textNotification}>
        You are out of time! Checkout now to avoid losing your order!
      </div>
    </div>
  );
};

export default Step;
