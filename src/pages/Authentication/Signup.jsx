import React, { useState } from 'react';

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="flex items-center justify-center px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col px-16 py-14 max-w-full bg-white shadow-sm w-[538px] max-md:px-5 max-md:mt-10 border rounded-sm">
        <div className="self-center text-5xl font-semibold leading-10 text-black m-3">
          Create an Account
        </div>

        <div className="self-center font-semibold leading-6 text-black text-3xl">
          Enter your Email to sign up for this app
        </div>

        <div className="px-4 py-2 mt-4 max-w-full text-3xl font-semibold leading-6 whitespace-nowrap bg-white rounded-lg border border-fuchsia-700 border-solid text-zinc-500 w-[400px]">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="px-4 py-2 mt-4 max-w-full text-3xl font-semibold leading-6 whitespace-nowrap bg-white rounded-lg border border-fuchsia-700 border-solid text-zinc-500 w-[400px]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full bg-transparent outline-none ${emailError ? 'border-red-500' : ''}`}
          />
          {emailError && <div className="text-3xl text-red-500">{emailError}</div>}
        </div>

        <div className="px-4 py-2 mt-4 max-w-full text-3xl font-semibold leading-6 bg-white rounded-lg border border-fuchsia-700 border-solid w-[400px]">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="px-4 py-2 mt-4 max-w-full text-3xl font-semibold leading-6 bg-white rounded-lg border border-fuchsia-700 border-solid w-[400px]">
          <input
            type="password"
            placeholder="Re-enter Password"
            className="w-full bg-transparent outline-none"
          />
        </div>

        <div className="flex gap-4 mt-4 text-3xl leading-5">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="shrink-0 self-start w-6 rounded-sm border-solid border-[3px] border-stone-300 h-[21px] appearance-none focus:outline-none"
          />
          <div className="flex-auto text-1xl leading-10">
            I agree to Rapparel’s{' '}
            <span className="text-1xl text-red-600 tracking-wider">Terms of Service</span>,{' '}
            <span className="text-1xl text-red-600 tracking-wider">Privacy Policy</span> and{' '}
            <span className="text-1xl text-red-600 tracking-wider">Content Policies</span>
          </div>
        </div>

        <button
          type="button"
          className="px-4 py-4 mt-7 w-full text-3xl font-semibold leading-6 text-white bg-rose-600 rounded-lg max-w-[400px]"
        >
          Create Account
        </button>

        <div className="flex items-center self-stretch justify-center gap-2 mt-3.5 text-3xl">
          <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
          or continue with
          <div className="self-stretch flex-1 h-px my-auto shrink-0 bg-neutral-200" />
        </div>

        <div className="flex justify-center items-center px-16 py-2.5 mt-5 w-full text-2xl font-semibold leading-6 text-black bg-white rounded-lg border border-black border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98385a4eff0a138d6693ba055be3eeb17f41c3ee60140ef443609cbf6a84b9a4?"
            alt="Google logo"
            className="shrink-0 aspect-square w-[23px]"
          />
          <span className="ml-3">Sign up with Google</span>
        </div>

        <div className="mt-20 text-3xl leading-6 max-md:mt-10">
          <span className="font-medium">Already have an account?</span>
          <a href="/Login" className="font-medium text-red-600">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
