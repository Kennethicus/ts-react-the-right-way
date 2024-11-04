import { personProps } from "./Person.types";

const Person = (props: personProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;
