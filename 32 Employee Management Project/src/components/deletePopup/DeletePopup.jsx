import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../redux/features/Popup/popupSlice";

const DeletePopup = () => {
  const dispatch = useDispatch();

  const popup = useSelector((state) => state.popup.deletePopup);

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className="fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card card-dash bg-base-100 w-96"
      >
        <div className="card-body">
          <h2 className="card-title">Delete</h2>
          <p>Are you sure you want to delete this Employee Details?</p>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Yes</button>

            <button
              onClick={() => dispatch(closeDeletePopup())}
              className="btn btn-primary"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
