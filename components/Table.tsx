interface TableProps {
  explanations: Explanation[];
}

export default function Table({ explanations }: TableProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <table className="table-auto w-3/4 bg-white shadow-lg rounded-lg border-collapse bg-gray-800">
        <thead>
          <tr className="bg-gray-800">
            <th className="border px-4 py-2 text-left text-white">Name</th>
            <th className="border px-4 py-2 text-left text-white">Topic</th>
            <th className="border px-4 py-2 text-left text-white">5 Year Old Explanation</th>
          </tr>
        </thead>
        <tbody>
          {explanations.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.topic}</td>
              <td className="border px-4 py-2">{item.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
