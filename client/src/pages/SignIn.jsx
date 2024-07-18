import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState();
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      // return setErrorMessage("모든 영역을 채워주세요!");
      dispatch(signInFailure("모든 영역을 채워주세요!"));
    }

    // 유효성 검사

    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success == false) {
        // return setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center ">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-screen bg-white p-12 border-maingreen transform transition duration-500">
          <h2 className="text-4xl font-extrabold text-gray-600 mb-8 text-center">
            Sign In
          </h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:greenhover focus:border-greenhover sm:text-sm transition duration-500 hover:border-greenhover"
                onChange={handleChange}
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:greenhover focus:border-greenhover sm:text-sm transition duration-500 hover:border-greenhover"
                onChange={handleChange}
              />
            </div>
            <div>
              {errorMessage && (
                <div className="mt-5 text-red-500 gb-red-200 px-4">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-[#F9F4E1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:greenhover transition duration-500 transform"
                disabled={loading}
              >
                {loading ? <span className="p-2">Loding...</span> : "Sign In"}
              </button>
            </div>
          </form>
          <OAuth />
          <div className="mt-6">
            <span>계정이 없나요?</span>
            <Link to="/sign-up" className="ml-2 text-gray-600">
              회원가입하러 가기
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
