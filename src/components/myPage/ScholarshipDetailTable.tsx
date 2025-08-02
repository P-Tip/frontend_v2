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
    <table className="w-full border text-sm text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">학기</th>
          <th className="p-2">장학금명</th>
          <th className="p-2">금액</th>
          <th className="p-2">상태</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{item.semester}</td>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.amount.toLocaleString()} 원</td>
            <td
              className={`p-2 ${item.status === "지급완료" ? "text-green-600 bg-green-100 bg-opacity-80 rounded-xl px-3 py-1 inline-block mt-[4px]" : "text-blue-600 bg-blue-100 bg-opacity-80 rounded-xl px-3 py-1 inline-block mt-[4px]"}`}
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
