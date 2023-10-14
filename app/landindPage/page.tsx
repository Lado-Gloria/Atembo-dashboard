import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const HomeScreen = () => {
  return (
    <div className="bg-homescreen bg-no-repeat bg-cover h-screen w-screen text-white opacity-80">
      <style jsx>{`
        @media (min-width: 768px) {
          .text-gray {
            font-size: 4rem;
          }
          .text-xl {
            font-size: 3rem;
          }
          .px-16 {
            padding-left: 4rem;
            padding-right: 4rem;
          }
          .py-4 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .md\:px-16 {
            padding-left: 4rem;
            padding-right: 4rem;
          }
          .md\:py-4 {
            padding-top: rem;
            padding-bottom: 1rem;
          }
        }
      `}</style>
      <img src="/images/Logo.png" alt="logo" className="float-left mt-10 mr-10 w-32" />
      <div className="flex flex-col justify-center items-center w-screen">
        <div className="text-center mt-20">
          <h1 className="font-bold text-4xl pb-4 text-gray">WELCOME TO URBAN VERDE</h1>
          <h1 className="font-bold text-4xl">
            Fighting food insecurity in urban areas
          </h1>
          <h1 className="font-bold text-4xl mt-2">
            and ensuring sustainability
          </h1>
          <h2 className="mt-4 text-xl font-bold">
          
          </h2>
        </div>
        <div className="mt-6 md:mt-14">
          <Link href="https://650331cd3e4f5307e2513f15--frabjous-cendol-ab87be.netlify.app/">
            <button className="border-2 border-white text-white font-bold hover:text-white hover:border-green px-6 md:px-16 py-3 md:py-4 rounded-md mr-3 md:mr-5">
              About Us
            </button>
          </Link>
          <Link href="/login">
            <button className="border-2 border-mainblue text-white font-bold bg-green hover:bg-black hover:border-hblue hover:text-white px-4 md:px-8 py-3 md:py-4 rounded-md ml-3">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
