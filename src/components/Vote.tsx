import React, { useEffect, useState } from "react";
import styles from "./vote.module.scss";
import ynStyle from "./yesNoVote.module.scss";
import { ReactComponent as Active } from "../assets/svg/circle-check-regular.svg";
import { ReactComponent as Proposed } from "../assets/svg/lightbulb-regular.svg";
import { ReactComponent as Draft } from "../assets/svg/pen-to-square-regular.svg";
import { Divider } from "./Divider";

export type PolicyStatusType = "draft" | "active" | "proposed";

export interface VoteProps {
  title: string;
  description: string;
  proposer: string;
  status: PolicyStatusType;
  votes: number;
  onVoted?: (value: boolean) => void;
}

export interface YesNoVoteProps extends VoteProps {}

export function Vote(props: VoteProps) {
  return (p: { children?: JSX.Element[] | JSX.Element }) => (
    <div className={styles.voteContainer}>
      <div className={styles.title}>
        <span>{props.title}</span>
        <span style={{ height: 20, width: 20 }}>
          <PolicyStatus status={props.status} />
        </span>
      </div>
      <div className={styles.description}>{props.description}</div>

      <div className={styles.proposer}>
        <span>{props.proposer}</span>
      </div>
      {p.children}
    </div>
  );
}

export function YesNoVote(props: YesNoVoteProps) {
  const VoteButton = Vote(props);

  return (
    <VoteButton>
      <Divider />
      <div className={ynStyle.container}>
        <button className={ynStyle.positive}>Yes</button>
        <button className={ynStyle.negative}>No</button>
      </div>
    </VoteButton>
  );
}

export function PolicyStatus(props: { status: PolicyStatusType }) {
  const [status, setStatus] = useState(() => <></>);

  useEffect(() => {
    switch (props.status) {
      case "active": {
        setStatus(() => <Active />);
        break;
      }
      case "draft":
        setStatus(() => <Draft />);
        break;
      case "proposed":
        setStatus(() => <Proposed />);
        break;
    }
  }, [props.status]);

  return <>{status}</>;
}
