
export default function Container({children}) {
  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-16  lg:px-24">
      {children}
    </div>
  )
}
