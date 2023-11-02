import Navigation from "@/components/navigation"
import OccasionForm from "@/components/occasionForm"

const Page = () => {
  return (
    <>
      <Navigation />
      <main className='flex items-center justify-center mt-6'>
        <OccasionForm />
      </main>
    </>
  )
}

export default Page