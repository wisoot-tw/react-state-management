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

const Movie = connect(
    mapStateItem,
    mapDispatch
  )(({ item, increment }) => {
    return (
      ...
    )
  });









const movieWithId = (id) =>
  atom({
    key: `item-${id}`,
    default: itemsList[id],
  });

const Movie = ({ id }) => {
  const [movie, setMovie] = useRecoilState(movieWithId(id));
  return {
      ...
  }
};