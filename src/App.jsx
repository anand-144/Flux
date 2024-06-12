import { Home, BlogContentPage } from "./pages";
import { About } from "./components";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

function App() {
  let{loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if (error) return <p>Something is wrong!</p>
  // console.log(data)
  
  return (
    <div>
      <Routes>
        <Route path="/" element=  {<Home blogs={data?data:""}/>} ></Route>
        <Route path="/blog/:id" element=  {<BlogContentPage blogs={data?data:""}/>} ></Route>
        <Route path="/about" element={<About blogs={data ? data : ""} />} />
      </Routes>
    </div>
  );
}

export default App;
