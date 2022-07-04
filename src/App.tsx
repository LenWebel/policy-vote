import "./App.css";
import { YesNoVote, YesNoVoteProps } from "./components/Vote";

const policies: Array<YesNoVoteProps> = [
  {
    title: "Abolish negative gearing",
    description:
      "Abolish negative gearing on property owners who have more than 1 investment property",
    proposer: "John Appleton",
    status: "draft",
    votes: 0,
  },
  {
    title: "Turn back the boats",
    description:
      "Refuse entry to all asylum seekers trying to enter illegally by boat.",
    proposer: "Tony Abbot",
    status: "active",
    votes: 0,
  },
];

function App() {
  return (
    <>
      {policies.map((p) => (
        <YesNoVote {...p} />
      ))}
    </>
  );
}

export default App;
