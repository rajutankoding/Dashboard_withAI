const TableComponents = (props) => {
  console.log(props);
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>{props.props.data1}</td>
        <td>{props.props.data2}</td>
        <td>{props.props.data3}</td>
      </tr>
    </table>
  );
};

export default TableComponents;
