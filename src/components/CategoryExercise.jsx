import { useState } from "react";
export const CategoryExercise = ({ filterExercises, categories }) => {
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");

  const handleChange = async (e) => {
    try {
      let value = e.target.value;
      setSelected(value);
      await filterExercises(value);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="category-filter">
      <label>Escoge una categoría: </label>
      <select value={selected} onChange={handleChange}>
        <option key="empty" value="">
          Todos
        </option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      {error ? <p className="msg-error">{error}</p> : null}
    </section>
  );
};
