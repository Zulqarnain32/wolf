import React from "react";

export default function Accordion() {
    const items = [
      { title: "What is React? >", content: "React is a JavaScript library for building user interfaces." },
      { title: "What is Tailwind?", content: "Tailwind CSS is a utility-first CSS framework for styling applications." },
      { title: "How does an accordion work?", content: "An accordion hides and shows content dynamically." },
    ];
  
    return (
      <div className="max-w-lg mx-auto mt-10 space-y-2">
        {items.map((item, index) => (
          <details
            key={index}
            className="bg-gray-100 border border-gray-300 rounded-lg open:ring-2 open:ring-blue-400 transition-all duration-300"
          >
            <summary className="cursor-pointer p-4 text-lg font-medium bg-gray-200 hover:bg-gray-300 transition">
              {item.title}
            </summary>
            <div className="p-4 text-gray-700">{item.content}</div>
          </details>
        ))}
      </div>
    );
  }
  