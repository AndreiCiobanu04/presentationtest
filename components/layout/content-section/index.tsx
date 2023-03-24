import { PortableText } from "@portabletext/react";
import components from "./components";

const ContentSection = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default ContentSection;
