import Image from 'next/image'; 

export function LoadingScreen(){
    return (
        <>
        <div className="">
                <div className="flex flex-col">
                    <div className="w-full"> 
                        <div className="animate-pulse border-b border-gray-200 shadow bg-pink-200 backdrop-filter backdrop-blur-lg bg-opacity-70 border-b border-gray-200 border-dotted border-2 firefox:bg-opacity-90" id="success">
                            
                            <div className="grid place-items-center">
                            <div>
                                <Image 
                                    src="/ichigo.svg"
                                    alt="logo for site"
                                    width={500}
                                    height={300}
                                />
                            </div>
                            

                            <div className="grid grid-cols-1 gap-2">
                            <div>
                            <table className="divide-y divide-gray-300">
                                <thead className=""> 
                                    <tr> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Symbol]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Platform]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Buy]
                                        </th> 
                                        <th className="px-6 py-2 text-xs text-gray-500"> 
                                            [Sell]
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300">
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $BTC-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Coinbase
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $BTC-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Bittrex
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $ETH-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Coinbase
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td>
                                    </tr> 
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    $ETH-USD
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm hover:bg-red-100">
                                            <div >
                                                <div className="inline-block"> 
                                                    Bittrex
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td> 
                                        <td className="px-6 py-4 text-sm ">
                                            <div >
                                                <div className="inline-block text-gray-500"> 
                                                loading...
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table> 
                            </div>
                            <div> 
                                <span className="text-xs flex justify-center text-yellow-700">loading data....</span> 
                                <div className="grid grid-cols-1 gap-1 lg:flex justify-between lg:flex justify-between xl:flex justify-between">
                                    <button  className="text-sm text-indigo-700 disabled:opacity-50">refresh data</button>
                                    <button  className="text-sm text-green-700 disabled:opacity-50">view recommendations</button>
                                </div>

                            </div>
                            </div>

                                


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        
        
        
        
        
        </>
    )
}