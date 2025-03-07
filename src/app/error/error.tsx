'use client';

const ErrorPage = () => {
  return (
    <div className="text-center p-6 bg-red-100 rounded-md">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4">Please refresh the page or try again later.</p>
    </div>
  );
};

export default ErrorPage;