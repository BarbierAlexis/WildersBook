const WilderSkill = ({ title, votes }) => {
  const skill = `${title.charAt(0).toUpperCase() + title.slice(1)}: ${votes}`
  return (
    <>
      <li>
        {skill}
      </li>
    </>
  );
};

export default WilderSkill;
