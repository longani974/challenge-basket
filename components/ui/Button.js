import React from "react";

function Button({ children }) {
    const hoverStyle =
        "hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50";
    return (
        <button
            className={`bg-purple-600 text-white px-2 py-4 rounded-lg text-lg font-semibold ${hoverStyle}`}
        >
            {children}
        </button>
    );
}

export default Button;
