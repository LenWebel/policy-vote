import "./App.css";
import { YesNoVote } from "./components/Vote";

function App() {
  return (
    <YesNoVote
      title="Abolish negative gearing"
      description="Abolish negative gearing on property owners who have more than 1 investment property"
      onVoted={(value) => console.log(value)}
      proposer={"John Appleton"}
      status={"proposed"}
      votes={0}
    />
  );
}

export default App;
