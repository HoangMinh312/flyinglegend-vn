const SubmitButton = ({ isSubmitting, onClick }) => {
  return (
    <button
      type="submit"
      className={`p-2 rounded ${
        isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
      } text-white flex items-center justify-center`}
      onClick={onClick}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
            ></path>
          </svg>
          Saving...
        </>
      ) : (
        "Save Article"
      )}
    </button>
  );
};

export default SubmitButton;