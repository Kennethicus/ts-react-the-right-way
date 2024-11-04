type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends { id: number; name: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, _) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            key={item.id}
            onClick={() => onClick(item)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
