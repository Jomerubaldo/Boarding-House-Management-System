const LoginForm = () => {
  return (
    <form>
      <h1 className="text-5xl font-bold pt-45 text-center">Login</h1>
      <div className="flex flex-col pt-20 space-y-5">
        <input
          type="text"
          placeholder="Username"
          name="userName"
          required
          className="outline-2 p-1 w-80"
        />
        <input
          type="password"
          placeholder="Password"
          name="userPassword"
          required
          className="outline-2 p-1 w-80"
        />
        <button
          type="submit"
          className="bg-blue-500 px-10 py-2 w-80 mt-5 font-bold text-[#F3F4F6]"
        >
          Login
        </button>
        <p className="text-sm underline underline-offset-1 text-right -mt-3">
          <a href="#">Forgot password?</a>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
