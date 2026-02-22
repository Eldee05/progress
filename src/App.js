export default App;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const stepper = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">
        stepper {stepper} : {messages[stepper - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950ff", color: "#ffffff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950ff", color: "#ffffff" }}>
          Next
        </button>
      </div>
    </div>
  );
}
