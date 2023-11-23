import { Link } from "react-router-dom"


function Home() {
  return (
    <>
        <div className="flex flex-col gap-12 px-8 py-12 bg-[url('./assets/home1.png')] bg-cover h-[calc(100vh-2rem)]">
            <h1 className="text-4xl font-bold text-white">You got the travel plans, we got the travel vans.</h1>
            <p className="text-white">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="" className="text-white bg-orange-400 text-center rounded-lg py-2 font-bold">Find your van</Link>            
        </div>
    </>
  )
}

export default Home