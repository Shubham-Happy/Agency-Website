import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section7() {
  return (
    <div className="py-10 lg:px-32 px-10 bg-primary break-words">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-white text-left text-6xl lg:text-7xl">
          INVESTORS
        </text>
      </div>
      <div className="mt-10 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PhotoSetAbout
            link=""
            name="Amazon Inc"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Flipkart.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Instagram.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Facebook.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
        </div>
      </div>
    </div>
  );
}
