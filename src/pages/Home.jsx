import {Navbar , Blogs, Footer} from '../components';

const Home = ({ blogs }) => {

  return (
    <div>      
    <Navbar />
    <Blogs blogs={blogs?blogs:""}/>
    <Footer />
    </div>
  )
}

export default Home