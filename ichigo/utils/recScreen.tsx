import { Recommendation } from '../utils/renderdata';
import toast from 'react-hot-toast'; 


const recScreen = (info: Recommendation ) => toast.custom((t) => (
    <div className={`${
        t.visible? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-pink-200 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-70 border-b border-gray-200 firefox:bg-opacity-90 border-dotted border-2`}>
        <div className="flex-1  p-4"> 
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5 text-lg">
                    [ yo! ]
                </div>
                <div className="ml-3 flex-1">
                    <span>heres a tip: </span>
                    <div className="grid grid-cols-1 text-sm">
                        <span className="text-orange-600">buy BTC on {info.buyBTC} </span> 
                        <span className="text-emerald-400">buy ETH on {info.buyETH} </span> 
                        <span className="text-rose-600">sell BTC on {info.sellBTC} </span> 
                        <span className="text-cyan-700">sell ETH on {info.buyETH} </span>
                    </div>
                </div> 
            </div>
        
        </div>
        <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        close
      </button>
    </div>

    </div>
)); 

export default recScreen;