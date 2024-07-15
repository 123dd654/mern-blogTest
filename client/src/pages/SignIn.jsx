import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-screen bg-white p-12 transform transition duration-500 ">
          <h2 className="text-4xl font-extrabold text-blue-950 mb-8 text-center">
            Sign In
          </h2>
          <form className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                이메일
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="이메일을 입력해주세요"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:greenhover sm:text-sm transition duration-500 hover:border-greenhover"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:greenhover sm:text-sm transition duration-500 hover:border-greenhover"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-[#F9F4E1]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:greenhover transition duration-500 transform"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
