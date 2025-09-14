import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Log_In</title>
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4 mt-16">
                <div className="bg-background shadow-xl rounded-xl p-10 max-w-2xl w-full mt-10">
                    <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Sign😊Up</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-white-700">Name:</label>
                            <input type="text" placeholder="Your Name" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Email:</label>
                            <input type="email" placeholder="you@example.com" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Mobile_No:</label>
                            <input type="number" placeholder="Enter Number" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Address:</label>
                            <input type="address" placeholder="Home Address" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">City:</label>
                            <input type="text" placeholder="Enter City" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">State:</label>
                            <input type="text" placeholder="Enter State" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Country:</label>
                            <input type="text" placeholder="Enter Country" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Aadhaar Number:</label>
                            <input type="number" placeholder="Enter Aadhaar Number" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Code:</label>
                            <input type="number" placeholder="Code" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">Confirm_Code:</label>
                            <input type="number" placeholder="Confirm_Code" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                            {/* <textarea rows="4" placeholder="Your message..." className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea> */}
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-background py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                            Sign_Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}