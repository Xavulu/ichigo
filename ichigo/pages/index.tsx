import type { NextPage } from 'next';
import Image from 'next/image';
import { ShowData } from '../components/Data';

const Home: NextPage = () => {
  
  return (
      <div>
        <Image 
          src="/ichigo.svg"
          alt="logo for site"
          width={600}
          height={600}
        />
        <ShowData/>
      </div>
  )
}

export default Home
