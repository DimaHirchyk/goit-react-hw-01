import Table from "./table/table";
import "./TransactionHistory.css";
export default function TransactionHistory({ items }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((tab) => (
            <tr key={tab.id}>
              <Table table={tab} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
