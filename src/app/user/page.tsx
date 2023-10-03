"use client";
import React from "react";

export default function User() {
  return (
    <>
      <div>Page</div> 
    </>
  );
}
// "use client"

// import { useSession } from "next-auth/react";

// function MiComponente() {
//   const { data: session } = useSession();

//   console.log(session)

//   if (session) {
//     return <div>Bienvenido, {session.user.name}!</div>;
//   } else {
//     return <div>Por favor, inicia sesión.</div>;
//   }
// }

// export default MiComponente;
