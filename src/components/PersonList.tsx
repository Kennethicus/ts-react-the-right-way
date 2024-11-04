import { Name } from "./Person.types";
type PersonListPropType = {
  names: Name[];
};

const PersonList = (props: PersonListPropType) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.firstName} - {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
