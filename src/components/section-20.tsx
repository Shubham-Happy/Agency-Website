import { LogoSetAbout } from "@/components/logo-set-about";

export function Section20() {
  return (
    <div className="py-10 lg:px-32 px-10 break-words bg-gradient-to-tr from-transparent to-transparent via-amber-50">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-left text-6xl lg:text-7xl">
          INVESTORS
        </text>
      </div>
      <div className="mt-10 mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
