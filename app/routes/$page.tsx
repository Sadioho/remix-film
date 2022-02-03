import { useParams } from "remix";

export default function Page() {
  const { someId } = useParams();
  return <div>Page {someId}</div>;
}
