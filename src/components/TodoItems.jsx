import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
