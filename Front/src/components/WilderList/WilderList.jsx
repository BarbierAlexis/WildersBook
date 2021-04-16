import WilderCard from "../WilderCard/WilderCard";
import { List } from "./style";
const WilderList = (wilders) => {
  return (
    <List>
      {Object.values(wilders).map((wilder) => {
        console.log(wilder);
        return <WilderCard key={wilder._id} {...wilder} />;
      })}
    </List>
  );
};

export default WilderList;
