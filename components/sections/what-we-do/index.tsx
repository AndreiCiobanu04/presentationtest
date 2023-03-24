import CardLegal from "./CardLegal";
import withLazyComponent from "components/lazy-load/with-lazy-component";
import { WhatWeDoInteface } from "../../../interfaces/WhatWeDoInteface";

const cards = [
  {
    id: "1",
    img: "img",
    title: "title",
    description: "description",
  },
  {
    id: "2",
    img: "img",
    title: "title",
    description: "description",
  },
  {
    id: "3",
    img: "img",
    title: "title",
    description: "description",
  },
  {
    id: "4",
    img: "img",
    title: "title",
    description: "description",
  },
  {
    id: "5",
    img: "img",
    title: "title",
    description: "description",
  },
  {
    id: "6",
    img: "img",
    title: "title",
    description: "description",
    link: "test",
  },
];

interface ComponentProps {
  whatWeDo: Array<WhatWeDoInteface>;
  isMobile?: Boolean;
}
const WhatWeDoSection = ({ whatWeDo, isMobile }: ComponentProps) => {
  return (
    <div
      className="bg-[#E4E4E4]"
      id={isMobile ? "legal-services1" : "legal-services"}
    >
      <div className="grid py-10">
        <h1 className="text-center font-bold text-[#424244] text-4xl sm:text-4xl  ">
          LEGAL PRACTICE
        </h1>
      </div>
      <article className="sm:px-32 px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-7 md:py-10">
        {whatWeDo.map(({ title, description, _id, link }) => (
          <CardLegal
            key={_id}
            title={title}
            description={description}
            img="/ferrari-cool.png"
            link={link?.current}
          />
        ))}
      </article>
    </div>
  );
};

export default WhatWeDoSection;
