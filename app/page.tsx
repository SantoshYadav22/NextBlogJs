'use client'
import User from './User'

var fname: string[] = [];
const Home = () => {
  let callAPI = async () => {
    try {
      let res = await fetch('http://127.0.0.1:8000/api/list');
      let data = await res.json();

      for (var x in data) {
        fname[+x] = data[x].prod_name;
        console.log(data)
      }
    } catch (err) {
      console.error(err);
    }
  };

  callAPI();

  return (
    <div className=''>
      <main className=''>
      <User />
        <ul>
          {fname.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>     

        </main>
    </div>
  );
};

export default Home;
