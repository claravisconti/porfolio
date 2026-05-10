export function LazySection({ children }) {
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: 200 }} />}
    </div>
  );
}