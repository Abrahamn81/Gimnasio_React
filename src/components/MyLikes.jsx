export const MyLikes = ({ setFavorites }) => {
  const handleChange = async (e) => {
    let checked = e.target.checked;
    setFavorites(checked);
  };

  return (
    <section className="filtro-checkbox">
      <input
        type="checkbox"
        className="checkbox"
        onChange={handleChange}
      ></input>
      <label>Mis ejercicios favoritos</label>
    </section>
  );
};
