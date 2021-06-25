import Head from "next/head";
import React from "react";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/client";

const buttonStyle =
 "p-4 text-lg bg-green-500 text-white font-semibold rounded-lg";

export default function main() {
 const [session, loading] = useSession();

 return (
  <div className="text-center">
   <div className="text-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500 font-bold font-mono m-16">
    Hello World
   </div>
   <div>
    {!session && (
     <>
      <h1 className="text-xl m-4 font-bold">Not Signed In</h1>
      <button className={buttonStyle} onClick={signIn}>
       Sign in
      </button>
     </>
    )}
    {session && (
     <>
      <h1 className="text-xl m-4 font-bold">
       Signed In {session.user.email}
       {console.log(session.user)}
      </h1>
      <button className={buttonStyle} onClick={signOut}>
       Sign Out
      </button>
     </>
    )}
   </div>
   <div className="m-8">
    <button className={buttonStyle}>
     <Link href="/secret">SECRET</Link>
    </button>
   </div>
  </div>
 );
}
