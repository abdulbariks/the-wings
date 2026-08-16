"use client";

import subscriptionData from "@/components/dashboard/dancer-dashboard/subscription/subscription-data.json";
import {
  SubscriptionCard,
  SubscriptionData,
} from "@/components/dashboard/dancer-dashboard/subscription/SubscriptionCard";
import { DataTable } from "@/components/dashboard/reusable/DataTable";
import {
  Invoice,
  invoiceColumns,
} from "@/components/dashboard/dancer-dashboard/subscription/invoiceColumns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SubscriptionPage() {
  const handleCancelSubscription = () => {
    console.log("Subscription cancellation requested");
  };

  const handleUpdatePayment = () => {
    console.log("Update payment details requested");
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen space-y-6">
      {/* Current Plan Overview */}
      <SubscriptionCard
        subscription={subscriptionData.subscription as SubscriptionData}
        onCancel={handleCancelSubscription}
        onUpdatePayment={handleUpdatePayment}
      />

      {/* Invoice & Billing History Section */}
      <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white">
        <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="font-serif text-xl font-semibold text-zinc-900">
            Billing & Invoice History
          </CardTitle>
          <Badge
            variant="secondary"
            className="bg-zinc-100/80 text-zinc-500 font-normal text-xs px-3 py-1 rounded-none border-none"
          >
            {subscriptionData.invoices.length} Past Invoices
          </Badge>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <DataTable
            columns={invoiceColumns}
            data={subscriptionData.invoices as Invoice[]}
            // pageSize={5}
          />
        </CardContent>
      </Card>
    </div>
  );
}
