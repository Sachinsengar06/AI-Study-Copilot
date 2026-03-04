"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "@/context/ThemeContext";
import Header from "./ui/Header";

interface LineChartProps {
  title: string;
  subTitle: string;
}

export default function LineChartComponent({
  title,
  subTitle,
}: LineChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const data = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 3 },
    { day: "Wed", hours: 1 },
    { day: "Thu", hours: 4 },
    { day: "Fri", hours: 2 },
    { day: "Sat", hours: 5 },
    { day: "Sun", hours: 3 },
  ];

  return (
    <div className="w-full shadow-sm bg-white dark:bg-gray-800 rounded-lg p-6 transition-colors">
      <Header title={title} subtitle={subTitle} headingType="small"/>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              stroke={isDark ? "#374151" : "#e5e7eb"}
              strokeDasharray="5 5"
            />
            <XAxis
              dataKey="day"
              stroke={isDark ? "#9ca3af" : "#6b7280"}
            />
            <YAxis
              stroke={isDark ? "#9ca3af" : "#6b7280"}
              width="auto"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                border: "none",
                borderRadius: "8px",
                color: isDark ? "#ffffff" : "#000000",
              }}
            />
            <Line
              type="monotone"
              dataKey="hours"
              stroke={isDark ? "#60a5fa" : "#3b82f6"}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
