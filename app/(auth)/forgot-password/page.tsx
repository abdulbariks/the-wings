import { AuthHero } from "@/components/auth/AuthHero";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full container grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-162.5">
        <AuthHero
          imageUrl="/images/ballet-dancer.jpg"
          title="Lost access? We will get you back on stage without missing a beat."
          description="Enter the email linked to your Wings account and we will send a secure password reset link instantly."
        />

        <div className="flex items-center justify-center py-4">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
