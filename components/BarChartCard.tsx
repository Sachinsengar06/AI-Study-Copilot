"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Header from "./ui/Header";
import { useTheme } from "@/context/ThemeContext";

interface BarChartProps {
  title: string;
  subTitle: string;
}

export default function BarChartCard({ title, subTitle }: BarChartProps) {
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
    <div className="w-full shadow-sm rounded-lg bg-white dark:bg-gray-800 p-6 transition-colors">
      <Header title={title} subtitle={subTitle} headingType="small" />

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              stroke={isDark ? "#374151" : "#e5e7eb"}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              stroke={isDark ? "#9ca3af" : "#6b7280"}
            />

            <YAxis
              width="auto"
              stroke={isDark ? "#9ca3af" : "#6b7280"}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#1f2937" : "#ffffff",
                border: "none",
                borderRadius: "8px",
                color: isDark ? "#ffffff" : "#000000",
              }}
            />

            <Bar
              dataKey="hours"
              fill={isDark ? "#60a5fa" : "#3b82f6"}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}