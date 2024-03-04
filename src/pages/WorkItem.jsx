import { useUi } from "../context/StateContext";

export default function WorkItem() {
  const { clickedWork } = useUi();
  return (
    <div className="flex justify-center items-center">
      <p>{clickedWork.name}</p>
    </div>
  );
}
