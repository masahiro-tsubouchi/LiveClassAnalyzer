import { Card, Title } from "@tremor/react";

export const StudentStatusList = ({ students }: {
  students: { name: string; status: "一致" | "不一致"; delta: number }[];
}) => {
  return (
    <Card>
      <Title>受講生状況</Title>
      <div className="space-y-2">
        {students.map((s, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="text-sm">{s.name}</div>
            <div className={`px-2 py-1 rounded-md text-xs font-medium ${
              s.status === "一致" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}>
              {s.status} ({s.delta}%)
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
