"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, CheckSquare, CreditCard } from "lucide-react";

export interface SubscriptionData {
  planName: string;
  badgeText: string;
  accountRole: string;
  status: string;
  price: string;
  billingInterval: string;
  purchaseDate: string;
  nextRenewal: string;
  paymentMethod: {
    cardType: string;
    last4: string;
    expires: string;
  };
  features: string[];
}

interface SubscriptionCardProps {
  subscription: SubscriptionData;
  onCancel?: () => void;
  onUpdatePayment?: () => void;
}

export function SubscriptionCard({
  subscription,
  onCancel,
  onUpdatePayment,
}: SubscriptionCardProps) {
  return (
    <Card className="border border-zinc-200/80 shadow-none rounded-none bg-white p-6 space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-2xl font-semibold text-zinc-900">
              {subscription.planName}
            </h1>
            <Badge
              variant="outline"
              className="bg-zinc-100 text-zinc-700 border-zinc-200 rounded-none text-[10px] font-medium px-2 py-0.5 gap-1"
            >
              <CreditCard className="w-3 h-3" />
              {subscription.badgeText}
            </Badge>
          </div>
          <p className="text-xs text-zinc-400">
            Account Role: {subscription.accountRole} • {subscription.status}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="rounded-none border-zinc-200/80 text-zinc-700 hover:bg-zinc-50 hover:text-red-600 text-xs font-medium h-9 gap-1.5 self-end sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Cancel Subscription
        </Button>
      </div>

      {/* 3 Grid Column Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1: Plan Price */}
        <div className="bg-zinc-100/60 p-5 space-y-4 border border-zinc-100 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
              Your Plan Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-semibold text-zinc-900">
                {subscription.price}
              </span>
              <span className="text-xs text-zinc-500">
                {subscription.billingInterval}
              </span>
            </div>
          </div>
          <div className="space-y-1 text-xs pt-4 border-t border-zinc-200/50">
            <div className="flex justify-between text-zinc-500">
              <span>Purchase date:</span>
              <span className="font-medium text-zinc-900">
                {subscription.purchaseDate}
              </span>
            </div>
            <div className="flex justify-between text-zinc-500">
              <span>Next Renewal:</span>
              <span className="font-medium text-zinc-900">
                {subscription.nextRenewal}
              </span>
            </div>
          </div>
        </div>

        {/* Box 2: Payment Method */}
        <div className="bg-zinc-100/60 p-5 space-y-4 border border-zinc-100 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
              Payment Method
            </span>
            <div className="space-y-1">
              <p className="font-serif text-base font-semibold text-zinc-900">
                {subscription.paymentMethod.cardType} ending in ••••{" "}
                {subscription.paymentMethod.last4}
              </p>
              <p className="text-xs text-zinc-400">
                Expires {subscription.paymentMethod.expires}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={onUpdatePayment}
            className="w-full bg-white border-zinc-200/80 rounded-none text-xs font-medium text-zinc-800 hover:bg-zinc-50 h-9"
          >
            Update Payment Details
          </Button>
        </div>

        {/* Box 3: What's Included */}
        <div className="bg-zinc-100/60 p-5 space-y-3 border border-zinc-100">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium block">
            What&#39;s Included
          </span>
          <ul className="space-y-2 text-xs text-zinc-600">
            {subscription.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
