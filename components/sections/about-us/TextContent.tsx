interface TextContentProps {
  title: string;
  text: string;
}

const TextContent = ({ title, text }: TextContentProps) => {
  return (
    <div className="container text-justify p-5 sm:p-10 text-[#E4E4E4]">
      <h3 className="text-xl font-semibold mb-5">{title}</h3>
      <p className="text-xl font-serif">{text}</p>
    </div>
  );
};

export default TextContent;
