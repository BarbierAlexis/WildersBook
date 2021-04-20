import WilderSkill from "../WilderSkill/WilderSkill";
import blank_profile from "./icons/blank-profile-picture-female.png";
import { SkillList, Card, CardContent, CardHeader, CardFooter, CardMedia } from "./style";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";

const WilderCard = (wilder) => {
  const handleDelete = (wilder) => {
    // onSuccess(wilder)
    axios.delete(`http://localhost:5000/api/wilder/delete/${wilder._id}`)
  }
  return (
    <Card>
      <CardHeader title={wilder.name} action={
          <IconButton onClick={(e) => handleDelete(wilder)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }/>
      <CardMedia image={blank_profile} title="Avatar" />
      <CardContent>
        <p>{wilder.city.toUpperCase()}</p>
      </CardContent>
      <CardFooter>
        <SkillList>
          {wilder.skills.map((skill) => {
            return <WilderSkill key={skill._id} {...skill} />;
          })}
        </SkillList>
      </CardFooter>
    </Card>
  );
};

export default WilderCard;
