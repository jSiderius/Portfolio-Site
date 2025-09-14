import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items: string[] = []; //["tokyo", "paris", "san fran"];

  if (items.length === 0) {
    return <p>No items are found</p>;
  }
  const message = items.length === 0 ? <p>No items are found</p> : null;
  return (
    <Fragment>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
