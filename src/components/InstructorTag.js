import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";
import { Link } from "react-router-dom";

const InstructorTag = ({ instructor }) => {
  const { emoji, name, slug } = instructor;

  return (
    <TagWrapper>
      <Link to={`/instructors/${slug}`}>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile>Go to profile</GoToProfile>
      </Link>
    </TagWrapper>
  );
};

export default InstructorTag;
