import BasicForm from "./components/BasicForm";
import ReusableForm from "./components/ReusableForm";
import StandartForm from "./components/StandartForm";

function App() {
  return (
    <>
      <h1>Reusable form</h1>
      <ReusableForm />
      <h1>Basic form</h1>
      <BasicForm />
      <h1>Standart form</h1>
      <StandartForm />
    </>
  );
}

export default App;
