/**
 * función para obtener la sessión
 */
export default async function getData({token}:{token: string}) {
  const res = await fetch('http://localhost:8000/usuario/userSession',{
    method: 'GET',
    headers:{
      "Content-type": "application/json",
        authorization: token,
    },
    next: { revalidate: 30 }
  })

  console.log(res)
 
  if (!res.ok) {
    throw new Error('La sesión ha expirado')
  }
 
  return res.json()
}