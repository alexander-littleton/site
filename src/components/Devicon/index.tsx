import { DeviconProps } from "./types";

export default function Devicon(props: DeviconProps) {
  return (
    <span>
      <i className={"icon " + props.type} />
    </span>
  );
}
