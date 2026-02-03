'use client'


const PageHeader = ({title}: {title: string}) => {
  return (
    <div className="py-20 bg-primary h-70 flex justify-center items-center">
      <h4 className="text-center text-white text-shadow-lg">{title}</h4>
    </div>
  )
}

export default PageHeader