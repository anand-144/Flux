import { FaFacebook, FaGithub, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-violet-500 text-white text-lg py-8 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        
        <div>
          <h6 className="font-bold uppercase py-2">Categories</h6>
          <ol>
            <li className="py-1">Web Development</li>
            <li className="py-1">Data Science</li>
            <li className="py-1">Machine Learning</li>
            <li className="py-1">Cloud Computing</li>
            <li className="py-1">Cybersecurity</li>
          </ol>
        </div>
        
        <div>
          <h6 className="font-bold uppercase py-2">Resources</h6>
          <ol>
            <li className="py-1">Tutorials</li>
            <li className="py-1">E-books</li>
            <li className="py-1">Webinars</li>
            <li className="py-1">Courses</li>
            <li className="py-1">Documentation</li>
          </ol>
        </div>
        
        <div>
          <h6 className="font-bold uppercase py-2">Company</h6>
          <ol>
            <li className="py-1">About Us</li>
            <li className="py-1">Careers</li>
            <li className="py-1">Contact</li>
            <li className="py-1">Press</li>
            <li className="py-1">Blog</li>
          </ol>
        </div>
        
        <div>
          <h6 className="font-bold uppercase py-2">Support</h6>
          <ol>
            <li className="py-1">FAQs</li>
            <li className="py-1">Help Center</li>
            <li className="py-1">Community</li>
            <li className="py-1">Guides</li>
            <li className="py-1">Terms & Conditions</li>
          </ol>
        </div>

        <div className="col-span-2 pt-2 md:pt-2">
            <p>Subscribe To Our Newsletter</p>
            <p className='py-4'>The latest news, articles, and resources sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded-md mb-2' type="email" placeholder="Enter email" />
                <button className='p-2 mb-2 bg-[#00B86E] text-white rounded-md'>Subscribe</button>
            </form>
        </div>
        
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-green-500 items-center'>
            <p>2024 FLUX, LLC. All rights reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook className="hover:text-blue-800"/>
                <FaGithub className="hover:text-black"/>
                <FaInstagram className="hover:text-fuchsia-800"/>
                <FaTwitch className="hover:text-violet-900"/>
                <FaTwitter className="hover:text-blue-800"/>
            </div>
      </div>

    </div>
  );
}

export default Footer;
