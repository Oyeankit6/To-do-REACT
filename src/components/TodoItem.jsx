function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

// import React from "react";

// function TodoItem({
//   todoName,
//   todoDate,
//   onDeleteClick,
//   onToggleComplete,
//   completed,
// }) {
//   return (
//     <div className="container">
//       <div className="row kg-row">
//         <div className="col-1">
//           <input
//             type="checkbox"

//             checked={completed}
//             onChange={onToggleComplete}
//           />
//            <input
//             type="checkbox"
//             checked={item.completed}
//             onChange={() => onToggleComplete(index)}
//           />

//         </div>
//         <div className="col-5">{todoName}</div>
//         <div className="col-3">{todoDate}</div>
//         <div className="col-3">
//           <button
//             type="button"
//             className="btn btn-danger kg-button"
//             onClick={() => onDeleteClick(todoName)}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;
