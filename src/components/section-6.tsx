import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section6() {
  return (
    <div className="py-10 bg-pink-600 lg:px-32 px-10">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-7xl text-white text-left">
          MEET THE TEAM
        </text>
      </div>
      <div className="mt-10 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PhotoSetAbout
            link=""
            name="Shubham Shrivastav"
            image="/images/placeholder.png"
            person={false}
            position="Founder"
          />
          <PhotoSetAbout
            link=""
            name="Shivanshee sahu"
            image="/images/placeholder.png"
            person={false}
            position="Co-Founder"
          />
          <PhotoSetAbout
            link=""
            name="Nayan Agrawal"
            image="/images/placeholder.png"
            person={false}
            position="-"
          />
          <PhotoSetAbout
            link=""
            name="John Doe"
            image="/images/placeholder.png"
            person={false}
            position="-"
          />
        </div>
      </div>
    </div>
  );
}
