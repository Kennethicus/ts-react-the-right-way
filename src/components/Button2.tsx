type Button2Props = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button2 = (props: Button2Props) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click Me 2</button>
  );
};

export default Button2;
