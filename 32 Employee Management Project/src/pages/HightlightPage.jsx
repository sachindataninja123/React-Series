import React from "react";
import { useSelector } from "react-redux";

const HighlightPage = () => {
  const highlight = useSelector((state) => state.highlight.employee);

  if (!highlight || highlight.length === 0) {
    return <p>No highlighted employees</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {highlight.map((emp) => (
        <div
          key={emp.id}
          className="p-4 bg-white shadow rounded-lg"
        >
          <h2 className="font-semibold text-lg">{emp.name}</h2>
          <p>{emp.role}</p>
          <p>{emp.department}</p>
        </div>
      ))}
    </div>
  );
};

export default HighlightPage;
