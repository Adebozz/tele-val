import { useState } from "react";

const PhoneValidator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState("");

  // Function to validate US phone numbers
  const validatePhoneNumber = (number) => {
    const validPatterns = [
      /^1\s\d{3}-\d{3}-\d{4}$/,          // 1 555-555-5555
      /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,     // 1 (555) 555-5555
      /^1\(\d{3}\)\d{3}-\d{4}$/,         // 1(555)555-5555
      /^1\s\d{3}\s\d{3}\s\d{4}$/,        // 1 555 555 5555
      /^\d{10}$/,                        // 5555555555
      /^\d{3}-\d{3}-\d{4}$/,             // 555-555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/           // (555)555-5555
    ];

    return validPatterns.some((pattern) => pattern.test(number));
  };

  const handleCheck = () => {
    if (!phoneNumber.trim()) {
      alert("Please provide a phone number");
      return;
    }

    if (validatePhoneNumber(phoneNumber)) {
      setResult(`✅ Valid US number: ${phoneNumber}`);
    } else {
      setResult(`❌ Invalid US number: ${phoneNumber}`);
    }
  };

  const handleClear = () => {
    setPhoneNumber("");
    setResult("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
      <h2 className="text-lg font-bold mb-4">📞 US Phone Number Validator</h2>
      <input
        type="text"
        id="user-input"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter a US phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="mt-4 flex justify-center gap-2">
        <button
          id="check-btn"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleCheck}
        >
          Validate
        </button>
        <button
          id="clear-btn"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      {result && (
        <p id="results-div" className="mt-4 text-lg font-semibold">
          {result}
        </p>
      )}
    </div>
  );
};

export default PhoneValidator;
