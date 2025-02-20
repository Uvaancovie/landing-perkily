"use client"

import type React from "react"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpIcon, ArrowDownIcon, Users, DollarSign, Activity, CheckCircle } from "lucide-react"

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const Dashboard: React.FC = () => {
  // Static data for demonstration
  const kpiData = [
    { title: "Total Customers", value: "1,234", icon: Users, change: 5.2 },
    { title: "Revenue", value: "$56,789", icon: DollarSign, change: -2.3 },
    { title: "Active Deals", value: "45", icon: Activity, change: 1.5 },
    { title: "Conversion Rate", value: "23%", icon: CheckCircle, change: 3.1 },
  ]

  const recentActivities = [
    { id: 1, type: "Call", customer: "John Doe", date: "2023-06-15", status: "Completed" },
    { id: 2, type: "Email", customer: "Jane Smith", date: "2023-06-14", status: "Pending" },
    { id: 3, type: "Meeting", customer: "Bob Johnson", date: "2023-06-13", status: "Scheduled" },
    { id: 4, type: "Task", customer: "Alice Brown", date: "2023-06-12", status: "In Progress" },
  ]

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const customerGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Customers",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">CRM Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground">
                {kpi.change > 0 ? (
                  <span className="text-green-600 flex items-center">
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                    {kpi.change}% from last month
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                    {Math.abs(kpi.change)}% from last month
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={salesData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={customerGrowthData} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.type}</TableCell>
                  <TableCell>{activity.customer}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

