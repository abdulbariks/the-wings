import { AuthHero } from "@/components/auth/AuthHero";
import { EmailVerifyForm } from "@/components/auth/EmailVerifyForm";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-162.5">
        {/* Reusable Left Hero Section */}
        <AuthHero
          imageUrl="/images/ballet-dancer.jpg"
          title="A unified platform for every professional in the dance community."
          description="Join thousands of dancers, opera houses, and creative professionals on the world's leading digital dance network."
        />

        {/* Right Verification Form */}
        <div className="flex items-center justify-center py-4">
          <EmailVerifyForm />
        </div>
      </div>
    </div>
  );
}
