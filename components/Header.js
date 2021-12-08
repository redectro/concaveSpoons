import { FaWallet } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky text-sm md:text-lg top-0 z-50 grid grid-cols-1 md:grid-cols-2 space-y-3 p-5 md:px-10 items-center bg-gray-medium2">
            {/* Left */}
            <div>
                <div className="flex w-max border-2 justify-center items-center py-3 space-x-3 sm:space-x-5 px-6">
                    <div className="hover:animate-ping cursor-pointer font-bold">mint</div>
                    <div>|||</div>
                    <div className="hover:animate-ping cursor-pointer font-bold">ipfs spoons</div>
                    <div>|||</div>
                    <div className="hover:animate-ping cursor-pointer font-bold">on-chain spoons</div>
                    <div>|||</div>
                    <div className="hover:animate-ping cursor-pointer font-bold">about</div>
                </div>
            </div>

            {/* Right */}
            <div class="flex items-center space-x-4 justify-end">
                <div class="hover:animate-bounce flex items-center space-x-2 border-2 py-3 px-5 cursor-pointer">
                    <p>connect</p>
                    <FaWallet />
                </div>
            </div>
        </header>
    )
}

export default Header
