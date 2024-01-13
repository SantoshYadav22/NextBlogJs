import User from './User'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>sanotsh</h2>
      <User />
      <Apps name="developer" />

    </main>
  )
}

const Apps = (props:any) =>{
  return(
    <div>  {props.name}</div>
  )
}