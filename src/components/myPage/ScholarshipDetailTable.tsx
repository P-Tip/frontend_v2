export interface ScholarshipItem {
  semester: string;
  name: string;
  amount: number;
  status: "지급완료" | "지급예정";
}

export interface ScholarshipDetailTableProps {
  data: ScholarshipItem[];
}

const ScholarshipDetailTable = ({ data }: ScholarshipDetailTableProps) => {
  return (
    <table className="w-full table-auto mt-[40px]">
      <thead>
        <tr>
          <th className="text-left py-2 px-4 border-b border-gray-100 text-gray-400">
            학기
          </th>
          <th className="text-left py-2 px-4 border-b border-gray-100 text-gray-400">
            장학금명
          </th>
          <th className="text-left py-2 px-4 border-b border-gray-100 text-gray-400">
            금액
          </th>
          <th className="text-left py-2 px-2 border-b border-gray-100 text-gray-400">
            상태
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td className="py-2 px-4 font-semibold">{item.semester}</td>
            <td className="py-2 px-4 font-semibold">{item.name}</td>
            <td className="py-2 px-4 font-semibold">
              {item.amount.toLocaleString()} 원
            </td>
            <td
              className={`p-2 ${
                item.status === "지급완료"
                  ? "text-green-600 bg-green-100 text-sm font-semibold bg-opacity-80 rounded-xl px-3 py-1 inline-block mt-[5px]"
                  : "text-blue-600 bg-blue-100 text-sm font-semibold bg-opacity-80 rounded-xl px-3 py-1 inline-block mt-[5px]"
              }`}
            >
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScholarshipDetailTable;
