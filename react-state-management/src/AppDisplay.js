

const itemsList = [
  { id: 0, name: 'Example name', count: 0 },
  ...
];

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



