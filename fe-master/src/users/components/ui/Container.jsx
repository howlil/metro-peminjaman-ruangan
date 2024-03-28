export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 sm:px-5 md-px-12 lg-px-0 xl:px-24">

      {children}
    </div>
  );
}
