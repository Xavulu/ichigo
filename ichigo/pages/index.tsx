import type { NextPage } from 'next';
import Image from 'next/image';
import { ShowData } from '../components/Data';

const Home: NextPage = () => {
  
  return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <ShowData/>
        </div>
      </div>
  )
}

export default Home
