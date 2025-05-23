import { Card, Title, LineChart } from "@tremor/react";

export type DataPoint = { timestamp: string; score: number };

export const AnalyticsPanel = ({ data }: { data: DataPoint[] }) => {
  return (
    <Card>
      <Title>画面一致度スコア</Title>
      <LineChart
        data={data}
        index="timestamp"
        categories={["score"]}
        valueFormatter={(val: number) => `${val}%`}
        yAxisWidth={48}
      />
    </Card>
  );
};
