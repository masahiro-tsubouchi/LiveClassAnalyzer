import { VideoRoom } from "../components/VideoRoom";
import { AnalyticsPanel } from "../components/AnalyticsPanel";
import { StudentStatusList } from "../components/StudentStatusList";
import { Layout, Menu } from "antd";

const { Sider, Content } = Layout;

export default function InstructorDashboard() {
  const videoUrl = "https://livekit.example.com";
  const token = "GENERATED_TOKEN";
  const sampleData = [
    { timestamp: "10:00", score: 100 },
    { timestamp: "10:00:30", score: 85 },
  ];

  const studentStatus = [
    { name: "佐藤", status: "一致" as const, delta: 100 },
    { name: "鈴木", status: "不一致" as const, delta: 60 },
    { name: "高橋", status: "一致" as const, delta: 100 },
  ];

  return (
    <Layout>
      <Sider width={300} theme="light">
        <Menu
          mode="inline"
          items={[
            { key: "room", label: "Room" },
            { key: "students", label: "Students" },
          ]}
        />
      </Sider>
      <Content className="p-4 space-y-4">
        <VideoRoom url={videoUrl} token={token} />
        <AnalyticsPanel data={sampleData} />
        <StudentStatusList students={studentStatus} />
      </Content>
    </Layout>
  );
}
