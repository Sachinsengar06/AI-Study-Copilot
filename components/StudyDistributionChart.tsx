"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Header from "./ui/Header";
import { useTheme } from "@/context/ThemeContext";

interface StudyDistributionChartProps {
  title: string;
  subtitle: string;
}

const data = [
  { name: "Math", value: 10 },
  { name: "Science", value: 6 },
  { name: "History", value: 4 },
  { name: "Programming", value: 8 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

export default function StudyDistributionChart({
  title,
  subtitle,
}: StudyDistributionChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm px-4 py-6 transition-colors">
      <Header title={title} subtitle={subtitle} headingType="small" />

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={50}
              paddingAngle={3}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                  stroke={isDark ? "#1f2937" : "#ffffff"} // subtle ring separation
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                border: "none",
                borderRadius: "8px",
                color: isDark ? "#ffffff" : "#000000",
              }}
            />

            <Legend
              verticalAlign="bottom"
              height={36}
              wrapperStyle={{
                color: isDark ? "#d1d5db" : "#374151",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}