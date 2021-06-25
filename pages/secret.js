import {useState, useEffect} from "react";
import {useSession} from "next-auth/client";

export default function Secret() {
 const [session, loading] = useSession();
 const [content, setContent] = useState();

 useEffect(() => {
  const fetchData = async () => {
   const res = await fetch("/api/secret");
   const json = await res.json();

   if (json.content) {
    setContent(json.content);
   }
  };
  fetchData();
 }, [session]);

 //  if (typeof window !== "undefined" && loading) return null;

 if (!session) {
  return (
   <div className="text-center text-3xl font-mono font-bold p-8 ring-2">
    <div>You aren't Signed In</div>
   </div>
  );
 } else {
  return (
   <div className="text-center text-3xl font-mono font-bold p-8 ring-4 m-2">
    <div>{content}</div>
   </div>
  );
 }
}
