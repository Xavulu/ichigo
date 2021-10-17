import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';
import { cryptoResponse } from './api/cryptodata';
import fetcher from '../utils/fetcher';
import { ShowData } from '../components/Data';

const Home: NextPage = () => {
  
  return (
      <div>
      <div></div>
      <ShowData/>
      </div>
  )
}

export default Home
