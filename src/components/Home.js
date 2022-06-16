import { useEffect, useState } from "react";
import CoinGecko from 'coingecko-api'
import { Link } from 'react-router-dom'

export function Home() {

    const [coins, coinState] = useState(null)

    useEffect(() => {

        const CoinGeckoClient = new CoinGecko()

        async function pingAPI() {
            return await CoinGeckoClient.ping();
        }

        async function fetchCoinList() {
            const response = await CoinGeckoClient.coins.all()
            coinState(response.data)
            return response
        }

        pingAPI()
        fetchCoinList()
    }, [])

    return (
        <div>
            {coins && (
                <ul>
                    {coins.map(coin => {
                        return (
                            <li key={coin.id} className="flex items-center py-3 mt-2 mx-5 px-2 border border-gray-200 rounded-md">
                                <img src={coin.image.small} alt={coin.id} className="w-7 h-7" />
                                <Link to={`/${coin.id}`} className="ml-5 hover:text-red-600">
                                    {coin.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}
