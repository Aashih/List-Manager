import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4 flex items-center justify-center shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-black w-8 h-8 flex items-center justify-center text-green-500 font-bold rounded">
            HI
          </div>
          <h1 className="text-xl font-semibold">Item List Manager</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-10 w-full max-w-md bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Item List</h2>

        {/* Input and Button */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter item"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddItem}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow focus:outline-none"
          >
            Add Item
          </button>
        </div>

        {/* Item List */}
        <ul className="mt-6 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 border border-gray-300 rounded px-4 py-2 text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ItemListManager;
