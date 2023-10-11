"use client"
import React, { useEffect, useState } from 'react';
import cookie from 'cookiejs';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import HomeScreen from './landindPage/page';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = Boolean(cookie.get('LoginToken'));
    setIsUserLoggedIn(isLoggedIn);
    if (isLoggedIn) {
      router.push('');
    } else {
      setTimeout(() => {
        router.push('');
      }, 5000);
    }
  }, [router]);
  return (
    <main>
      <div>
    
        <HomeScreen/>
      </div>
      
    </main>
  );
};
export default Home;




// <main className="flex min-h-screen w-screen flex-col items-center gap-10 justify-center p-24 mytext bg-green-100">
//     <h1 className="font-bold text-6xl text-green">URBAN VERDE</h1>
//     <Image src="/images/Logo.png" className="w-[400px]" alt="logo" width={400} height={400} />
  
//     <h1 className="text-3xl font-semibold mb-4">Welcome to Urban Verde Dashboard</h1>
//     <p className="text-green text-3xl mb-6">
//       Experience the ultimate dashboard for managing urban spaces and communities.
//     </p>
  
  
      

//       <div className="flex  gap-3"></div>