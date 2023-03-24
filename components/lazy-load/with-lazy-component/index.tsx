import { useInView } from "react-intersection-observer";

const withLazyComponent = (Component) => (props) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className="min-h-[10px]">
      {inView && <Component {...props} />}
    </div>
  );
};

export default withLazyComponent;
