import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleOpenClose() {
    setIsOpen((isOpenCurrent) => !isOpenCurrent);
  }

  return (
    <>
      <button className="close" onClick={handleOpenClose}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button className="button-style" onClick={handlePrevious}>
              Previous
            </button>
            <button className="button-style" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
