import Card from "@/components/Card";
import { IoMdTime } from "react-icons/io";
import { BiSolidMedal } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import LineChart from "@/components/LineChart";
import BarChartCard from "@/components/BarChartCard";
import StudyDistributionChart from "@/components/StudyDistributionChart";
import Header from "@/components/ui/Header";

export default function Analytics() {
  return (
    <div className="px-3 py-1 w-full">
      <Header title="Analytics" subtitle=" Track your study performance and progress"/>
      <div className="flex gap-5">
      <Card
          title="24h"
          description="Total Study Time"
          Icon={IoMdTime}
          iconBg="bg-blue-50"
          iconColor="text-blue-700"
          sideText={"+8% this week"}
        />
        <Card
          title="87%"
          description="Average Quiz Score"
          Icon={BiSolidMedal}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
          sideText={"+12 quizzes"}
        />
        <Card
          title="50"
          description="Quizzes Completed"
          Icon={SlGraph}
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
          sideText={"+15% growth"}
        />
      </div>
      <div className="flex gap-4 my-10">
        <div className="flex-1">
        <LineChart title="Weekly Study Time" subTitle="Hours spent studying this week"/>
        </div>
        <div className="flex-1">
        <StudyDistributionChart title="Study Topic Distribution" subtitle="Breakdown of study time by subject"/>
        </div>
      </div>
      <BarChartCard title="Quiz Accuracy by Subject" subTitle="Your performance across different topics"/>
    </div>
  );
}
