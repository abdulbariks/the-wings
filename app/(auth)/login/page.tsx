import { AuthHero } from "@/components/auth/AuthHero";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[650px]">
        {/* Reusable Left Hero Section */}
        <AuthHero
          imageUrl="/images/dancer-hero.jpg"
          title="Welcome back to your global dance network. Your stage and upcoming audition calls await."
          description="Access your personalized dashboard, manage audition responses, update your media portfolio, and connect with global directors."
        />

        {/* Right Login Form */}
        <div className="flex items-center justify-center py-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
