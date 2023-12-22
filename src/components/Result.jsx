import { formatter, calculateInvestmentResults } from "../util/investment.js";
export default function Result({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {result.map((itemData) => {
          const totalInterest =
            itemData.valueEndOfYear -
            itemData.annualInvestment * itemData.year -
            initialInvestment;

          const totalAmountInvested = itemData.valueEndOfYear - totalInterest;
          return (
            <tr key={itemData.year}>
              <td>{itemData.year}</td>
              <td>{formatter.format(itemData.valueEndOfYear)}</td>
              <td>{formatter.format(itemData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
