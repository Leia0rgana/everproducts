function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-0 max-w-[1200px] flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export default Container
