import { workData } from "../../../helpers/workData";
import WorkListItem from "./WorkListItem";

export default function WorkList() {
  return (
    <div id="work" className="bg-light flex justify-center">
      <ul className="py-20 flex flex-col gap-8 item max-w-4xl">
        {workData.map((data) => {
          return <WorkListItem data={data} key={data.name} />;
        })}
      </ul>
    </div>
  );
}
