import Card from "@/components/Card";
import { FiBookOpen } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import LineChart from "@/components/LineChart";
import BarChartCard from "@/components/BarChartCard";
import Header from "@/components/ui/Header";

export default function Dashboard() {
  return (
    <div className="px-3 py-1">
      <Header title="Dashboard" subtitle="Welcome back! Here's your study overview."/>
      <div className="flex gap-5">
        <Card
          title="24"
          description="notes uploaded"
          Icon={FiBookOpen}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          sideText={"total"}
        />
        <Card
          title="12"
          description="Day study streak"
          Icon={FaFire}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
          sideText={"+2 days"}
        />
        <Card
          title="87%"
          description="Average Accuracy"
          Icon={GoGoal}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
          sideText={"+5%"}
        />
      </div>
      <div className="flex gap-4 mt-10">
        <LineChart title="Weekly Study Time" subTitle="Hours spent studying this week"/>
        <BarChartCard title="Quiz Accuracy by Subject" subTitle="Your performance across different topics"/>
      </div>
    </div>
  );
}
