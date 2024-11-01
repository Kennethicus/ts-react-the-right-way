type PersonListPropType = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: PersonListPropType) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.firstName}>
            {name.firstName} - {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
