import { workData } from "../../../helpers/workData";
import WorkListItem from "./WorkListItem";

export default function WorkList() {
  return (
    <div id="work" className="bg-light">
      <ul className="py-20 flex flex-col gap-8 item">
        {workData.map((data) => {
          return <WorkListItem data={data} key={data.name} />;
        })}
      </ul>
    </div>
  );
}
