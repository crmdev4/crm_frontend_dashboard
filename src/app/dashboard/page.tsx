"use client"

import { DollarSign, Trophy, Handshake, TrendingUp } from 'lucide-react';
import StaticData from '@/components/StaticData';
import FilterBar from '@/components/dashboard/FilterBar';
import DealsTable from '@/components/dashboard/DealsTable';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 min-h-screen w-full bg-gray-50 dark:bg-gray-950">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaticData
            title="Total Pipeline"
            value="$2.4M"
            icon={DollarSign}
            trend={12}
            trendLabel="from last month"
          />
          <StaticData
            title="Won This Month"
            value="$485K"
            icon={Trophy}
            trend={8}
            trendLabel="from target"
          />
          <StaticData
            title="Active Deals"
            value="147"
            icon={Handshake}
            trend={23}
            trendLabel="closing this week"
          />
          <StaticData
            title="Win Rate"
            value="68%"
            icon={TrendingUp}
            trend={5}
            trendLabel="improvement"
          />
        </div>

        {/* Main Content Area */}
        <div>
          <FilterBar />
          <DealsTable />
        </div>
      </div>
    </div>
  )
}


