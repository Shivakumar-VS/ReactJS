function List(props) {
    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    // fruits.sort((a, b) => a.calories - b.calories); // Sort by calories
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const listItems = fruits.map(fruit => (
    //                     <li key={fruit .id}>
    //                     {fruit .name}: &nbsp;{fruit .calories}
    //                     </li>
    // ));
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;{item.calories}
    </li>)

    return <><h3 className="list_cat">{category}</h3><ul className="listItems">{listItems}</ul></>;
}
List.defaultProps = {
    category: 'Category',
    items: []
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
}
export default List;