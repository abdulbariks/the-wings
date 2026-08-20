import { AuthHero } from "@/components/auth/AuthHero";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 md:p-8">
      <div className="w-full container grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-162.5">
        {/* Reusable Left Hero Section */}
        <AuthHero
          imageUrl="/images/ballet-dancer.jpg"
          title="The Wings made my audition process seamless, securing my first principal engagement abroad."
          description="Showcase your repertoire, track audition invitations in real-time, and get discovered by premier international directors and talent scouts."
        />

        {/* Right Register Form */}
        <div className="flex items-center justify-center py-4">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
