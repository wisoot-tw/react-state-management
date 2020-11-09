

const itemsList = [
  { id: 0, name: 'Example name', count: 0 },
  ...
];

const Items = ({ items, increment }) => {
  const [itemIds] = useState(itemsList.map((item) => item.id));
  return (
    {itemIds.map((id) => (
      <Item key={id} item={items[id]} increment={increment} />
    ))}
  );
};

const Item = ({ item, increment }) => {
  return (
    ...
  );
};






function reactionReducer(state = initialState, action) {
  switch (action.type) {
    ...
  }
}

const mapStateItem = (state, props) => ({ item: state[props.id] });

const Item = connect(
    mapStateItem,
    mapDispatch
  )(({ item, increment }) => {
    return (
      ...
    )
  });









const itemWithId = (id) =>
  atom({
    key: `item-${id}`,
    default: itemsList[id],
  });

const Item = ({ id }) => {
  const [item, setItem] = useRecoilState(itemWithId(id));
  return {
      ...
  }
};




const Item = React.memo(({ item, increment }) => {
  return (
    ...
  );
});



