import React from "react";

function Button({ children, bgColor, bgColorHover }) {
    return (
        <button
            className={`w-full ${bgColor} text-white mt-4 px-2 py-4 rounded-full text-lg font-semibold hover:${bgColorHover} focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50`}
        >
            {children}
        </button>
    );
}

export default Button;
