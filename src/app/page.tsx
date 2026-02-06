import { AppHeader } from '@/components/app-header';
import { VitalsCard } from '@/components/dashboard/vitals-card';
import { ActivityCard } from '@/components/dashboard/activity-card';
import { RemindersCard } from '@/components/dashboard/reminders-card';
import { HealthInsightsCard } from '@/components/dashboard/health-insights-card';
import { AlertsCard } from '@/components/dashboard/alerts-card';
import { ActivitySuggestionCard } from '@/components/dashboard/activity-suggestion-card';
import { patient, vitals, reminders } from '@/lib/data';

export default function DashboardPage() {
  return (
    <>
      <AppHeader patient={patient} />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-4">
            <AlertsCard patient={patient} />
          </div>

          <div className="lg:col-span-2">
            <VitalsCard vitals={vitals} />
          </div>

          <div className="lg:col-span-2">
            <ActivityCard vitals={vitals} />
          </div>

          <div className="lg:col-span-2">
            <HealthInsightsCard vitals={vitals} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <RemindersCard reminders={reminders} />
            </div>
            <div className="sm:col-span-2">
              <ActivitySuggestionCard patient={patient} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
