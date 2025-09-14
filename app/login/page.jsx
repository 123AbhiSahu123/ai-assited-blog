import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Log_In</title>
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4 mt-16">
                <div className="bg-background shadow-xl rounded-xl p-10 max-w-2xl w-full mt-10">
                    <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Log😊In</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-white-700">User_Name:</label>
                            <input type="text" placeholder="Your Name" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">User_Email:</label>
                            <input type="email" placeholder="you@example.com" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white-700">User_Code:</label>
                            <input type="number" placeholder="Code" className="mt-1 block w-full px-4 py-2 border border-white-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <button type="submit" className="w-full bg-purple-600 text-background py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                            Log_In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}