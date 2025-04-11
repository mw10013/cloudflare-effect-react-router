import { CardsActivityGoal } from '~/lib/components/cards/activity-goal'
import { CardsCalendar } from '~/lib/components/cards/calendar'
import { CardsChat } from '~/lib/components/cards/chat'
import { CardsCookieSettings } from '~/lib/components/cards/cookie-settings'
import { CardsCreateAccount } from '~/lib/components/cards/create-account'
import { CardsDataTable } from '~/lib/components/cards/data-table'
import { CardsMetric } from '~/lib/components/cards/metric'
import { CardsPaymentMethod } from '~/lib/components/cards/payment-method'
import { CardsReportIssue } from '~/lib/components/cards/report-issue'
import { CardsShare } from '~/lib/components/cards/share'
import { CardsStats } from '~/lib/components/cards/stats'
import { CardsTeamMembers } from '~/lib/components/cards/team-members'
import { OuiCardsTeamMembers } from './oui-team-members'

export function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <CardsStats />
        <div className="grid gap-1 sm:grid-cols-[260px_1fr] md:hidden">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsMetric />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-4 xl:space-y-4">
            <OuiCardsTeamMembers />
            <CardsTeamMembers />
            <CardsCookieSettings />
            <CardsPaymentMethod />
          </div>
          <div className="space-y-4 xl:space-y-4">
            <CardsChat />
            <CardsCreateAccount />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
        <div className="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsMetric />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsDataTable />
        </div>
        <CardsShare />
        <div className="xl:hidden">
          <CardsReportIssue />
        </div>
      </div>
    </div>
  )
}
