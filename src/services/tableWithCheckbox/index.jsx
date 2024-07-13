export default function TableWithCheckbox({ headers, bodyObject, order }) {
    console.log(headers);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className={header.className}>
              {header.displayValue}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyObject.map((row, i) => (
          <tr key={i}>
            {order.map((property, i) => (
              <td key={i}>{row[property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
