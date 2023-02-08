
export function Blush({size}: {size: number}) {
  if(size <= 1.9) {
    return(
      <div className="absolute -z-50 top-7 left-6 blur-xl w-8 h-8 bg-space-white mix-blend-difference"/>

    )
  }
  if (size >= 2 && size <= 2.5) {
    return(
      <div className="absolute -z-50 top-5 left-4 blur-xl w-11 h-11 bg-space-white mix-blend-difference"/>

    )
  }
  if (size >= 2.6 && size <= 3.5) {
    return(
      <div className="absolute -z-50 top-3 left-2.5 blur-xl w-16 h-16 bg-space-white mix-blend-difference"/>
    )
  }
  if (size >= 3.6) {
    return(
      // <div className="absolute -z-50 top-10 blur-xl w-20 h-20 bg-space-white opacity-50"/>
      <div className="absolute -z-50 -top-10 blur-2xl w-36 h-36 bg-space-white mix-blend-difference"/>
    )
  }

  return null

}