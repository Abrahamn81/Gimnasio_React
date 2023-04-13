import { useState } from "react";
export const CategoryExercise = ({ setCategory, category, categories }) => {
  const [error, setError] = useState("");

  const handleChange = async (e) => {
    let value = e.target.value;

    setCategory(value);
  };

  return (
    <section className="category-filter">
      <label>Escoge una categoría: </label>
      <select value={category} onChange={handleChange}>
        <option key="empty" value="">
          Todos
        </option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <button onClick={() => setCategory("")}>x</button>
      {error ? <p className="msg-error">{error}</p> : null}
    </section>
  );
};
