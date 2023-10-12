import Link from 'next/link';
import Image from 'next/image';
const HomeScreen = () => {
  return (
    <div className="bg-homescreen bg-no-repeat bg-cover h-screen w-screen text-white opacity-80">
      
      <img src="/images/Logo.png" alt="logo" className="float-left mt-10 mr-10 w-32" />
      <div className="flex flex-col justify-center items-center w-screen">
        <div className="text-center mt-20">
        <h1 className="font-bold text-6xl pb-40 text-gray"> WELCOME TO URBAN VERDE </h1>
        
          <h1 className="font-bold text-6xl">
           Fighting food insecurity in urban areas
          </h1>
          <h1 className="font-bold text-6xl mt-5">
           and ensuring sustainability
          </h1>
          <h2 className="mt-8 text-4xl font-bold">Experience the ultimate dashboard for managing urban spaces and communities</h2>
        </div>
        <div className="mt-14">
          <Link href="https://650331cd3e4f5307e2513f15--frabjous-cendol-ab87be.netlify.app/">
            <button className="border-2 border-white text-white font-bold hover:text-white hover:border-green px-16 py-4 rounded-md mr-5">About Us</button>
          </Link>
          <Link href="/login">
            <button className="border-2 border-mainblue text-white font-bold bg-green hover:bg-black hover:border-hblue hover:text-white px-8 py-4 rounded-md ml-3">Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;