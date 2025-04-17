import { LogoSetAbout } from "@/components/logo-set-about";

export function Section19() {
  return (
    <div className="py-10 lg:px-32 px-10 from-transparent to-transparent bg-gradient-to-br via-amber-50">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-left text-6xl">
          BRANDS WE WORK WITH
        </text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
      </div>
    </div>
  );
}
