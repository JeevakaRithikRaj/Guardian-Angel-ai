'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { HeartPulse, Gauge } from 'lucide-react';
import type { Vitals } from '@/lib/types';

const heartRateChartConfig = {
  value: {
    label: 'Heart Rate',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

const bpChartConfig = {
  systolic: {
    label: 'Systolic',
    color: 'hsl(var(--chart-1))',
  },
  diastolic: {
    label: 'Diastolic',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;


export function VitalsCard({ vitals }: { vitals: Vitals }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline">Heart Rate</CardTitle>
          </div>
          <CardDescription>24-hour heart rate monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={heartRateChartConfig} className="h-48 w-full">
            <AreaChart data={vitals.heartRate} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value, index) => (index % 4 === 0 ? value : '')} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <Area dataKey="value" type="natural" fill="var(--color-value)" fillOpacity={0.4} stroke="var(--color-value)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Gauge className="h-6 w-6 text-primary" />
            <CardTitle className="font-headline">Blood Pressure</CardTitle>
          </div>
          <CardDescription>Latest blood pressure readings</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={bpChartConfig} className="h-48 w-full">
            <BarChart data={vitals.bloodPressure} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="systolic" fill="var(--color-systolic)" radius={4} />
              <Bar dataKey="diastolic" fill="var(--color-diastolic)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
