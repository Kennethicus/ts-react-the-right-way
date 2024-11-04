type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 1 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome My ${props.name}! You're the ${messageCount}`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
