import Image from "next/image";

interface AuthHeroProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const AuthHero = ({ imageUrl, title, description }: AuthHeroProps) => {
  return (
    <div className="relative hidden md:flex flex-col justify-between w-full h-150 md:h-full min-h-125 bg-zinc-900 text-black p-4 lg:p-6 overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Auth visual hero"
          fill
          priority
          className="object-cover object-center grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Overlay Box at Bottom */}
      <div className="relative z-10 mt-auto bg-white/95 backdrop-blur-sm p-4  border border-zinc-200/80 shadow-lg">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight font-semibold text-zinc-900 mb-3">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
