type personProps = {
  name: { firstName: string; lastName: string };
};

const Person = (props: personProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};

export default Person;
