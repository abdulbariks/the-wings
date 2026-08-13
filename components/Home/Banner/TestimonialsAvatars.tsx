import { User } from "lucide-react";
import Image from "next/image";

const testimonials = ["avatar-1.jpg", "avatar-2.jpg", "avatar-3.jpg"];

export default function TestimonialsAvatars() {
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div
        className="
        inline-flex
        gap-4
        items-center
        mt-8
      "
      >
        <div className="flex items-center">
          {testimonials.map((image, index) => (
            <div
              key={image}
              className={`
              relative
              size-10
              md:size-12
              shrink-0
              overflow-hidden
              rounded-full
              border-background
              bg-muted
              border
              flex items-center justify-center
              ${index >= 0 ? "-mr-2" : ""}
            `}
            >
              {image ? (
                <Image
                  src={`/images/testimonials/${image}`}
                  alt="Student testimonial"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              ) : (
                <div className="size-9 rounded-full bg-gray-100 text-[#4A4C56] flex items-center justify-center">
                  <User size={20}/>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="font-medium text-primary">12,400+ dancers already in the wings</p>
      </div>
    </div>
  );
}
