const ScholarshipBox = ({
  title,
  amount,
  maxAmount,
}: {
  title: string;
  amount: number;
  maxAmount?: number;
}) => (
  <div className="bg-white p-4 rounded-xl shadow">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-lg font-bold">
      {amount.toLocaleString()}
      {typeof maxAmount === 'number' ? ` / ${maxAmount.toLocaleString()} 원` : '개'}
    </p>
  </div>
);

export default ScholarshipBox;