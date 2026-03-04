import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [stepper, setStepper] = useState(1); //reactions functions that start with use are react Hooks
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (stepper > 1) setStepper((step) => step - 1);
  }
  function handleNext() {
    if (stepper < 3) {
      setStepper((step) => step + 1);
    }
  }
  ////toggling state based on current state
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stepper >= 1 ? "active" : ""}>1</div>
            <div className={stepper >= 2 ? "active" : ""}>2</div>
            <div className={stepper >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            stepper {stepper} : {messages[stepper - 1]}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏾</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉🏾</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
