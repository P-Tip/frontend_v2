export const getStatusStyle = (status: string) => {
  switch (status) {
    case "모집중":
      return "bg-tag-green-bg text-tag-green-text";
    case "마감":
      return "bg-tag-red-bg text-tag-red-text";
    case "진행중":
      return "bg-yellow-100 text-yellow-600";
    case "예정":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const getCategoryStyle = (category: string) => {
  switch (category) {
    case "학술":
      return "bg-blue-50 text-blue-600";
    case "문화":
      return "bg-purple-50 text-purple-600";
    case "취업":
      return "bg-green-50 text-green-600";
    case "봉사":
      return "bg-orange-50 text-orange-600";
    case "국제교류":
      return "bg-indigo-50 text-indigo-600";
    case "창업":
      return "bg-red-50 text-red-600";
    default:
      return "bg-gray-50 text-gray-600";
  }
};
