"use client";

import { useCompletion } from "@ai-sdk/react";

export default function Cli() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  return (
    <div>
      <div className="border p-4 rounded-md">
        <div className="flex flex-col space-y-2">
          {completion}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex">
            <span className="text-gray-400 mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow bg-transparent focus:outline-none"
              placeholder="Enter a command..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
