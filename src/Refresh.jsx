import React from "react";

export default function Refresh({ onRefresh }) {
  return (
    <button
      className="py-2 px-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white"
      onClick={onRefresh}
    >
      Refresh
    </button>
  );
}
