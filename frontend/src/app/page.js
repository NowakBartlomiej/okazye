import Navigation from "@/components/navigation"
import OccasionList from "@/components/occasionList"

export default function Home() {

  return (
    <main>
      <Navigation />
      <OccasionList occasionFilter={"occasions"}/>
    </main>
  )
}