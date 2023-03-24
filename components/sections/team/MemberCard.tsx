import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

interface MemberCardInterface {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
  email: string;
  link: string;
  img: SanityImageSource;
  i: number;
}
import { useInView } from "react-intersection-observer";
import OnTouchWrapper from "../../layout/onTouchWrapper";
import { useRouter } from "next/router";
import Link from "next/link";

const MemberCard = ({
  firstName,
  lastName,
  role,
  img,
  link,
  i,
}: MemberCardInterface) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const router = useRouter();
  return (
    <Link href={`/team/${link}`} passHref onClick={(e) => e.preventDefault()}>
      <OnTouchWrapper
        onTouchCallback={() => false && router.push(`/team/${link}`)}
      >
        <div
          ref={ref}
          className={`${
            inView
              ? `relative top-0 opacity-1 left-0`
              : `opacity-0 top-[200px] left-[-30px] `
          } flex justify-center`}
          style={{
            transitionDuration: `${i % 4 >= 1 ? (i % 4) * 200 : 800}ms`,
          }}
        >
          <div className="flex flex-col pb-4 rounded-2xl w-[264px] sm:w-[300px]">
            <div className="flex flex-col items-center bg-transparent rounded-2xl w-[264px] sm:w-[300px] m-auto text-[#ECEEFF]">
              <Image
                src="/ferrari-cool.png"
                loading="eager"
                className="object-cover h-[340px] w-full pb-2 rounded-2xl mb-1"
                width={256}
                height={340}
                alt="alt"
              />
              <div className="font-bold uppercase text-lg mb-1">
                {firstName} {lastName}
              </div>
              <div className="uppercase text-sm mb-2">{role}</div>
            </div>
          </div>
        </div>
      </OnTouchWrapper>
    </Link>
  );
};

export default MemberCard;
