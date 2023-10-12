'use client'

const Page = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white px-6 py-4 rounded-md pb-6">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 my-6">Zaloguj się</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-700 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Hasło</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-violet-700 hover:text-violet-500">Zapomiałeś hasła?</a>
              </div>
            </div>
            <div className="mt-2">
              <input type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-violet-700 shadow-sm focus:border-violet-400 focus:ring focus:ring-violet-200  focus:ring-opacity-50"
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Zapamiętaj mnie
                            </span>
                        </label>
                    </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">Zaloguj Się</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page