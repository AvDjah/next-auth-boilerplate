import {getSession} from "next-auth/client";

export default async (req, res) => {
 const session = await getSession({req});
 console.log(session);
 if (session) {
  res.send({
   content: "Welcome to Secret Page",
  });
 } else {
  res.send({
   error: "You need to be logged in!",
  });
 }
};
