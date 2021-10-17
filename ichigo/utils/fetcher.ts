import ky from 'ky'; 
import { cryptoResponse } from '../pages/api/cryptodata';

const fetcher = async (url: string) => ky.get(url).json<cryptoResponse>();

export default fetcher;