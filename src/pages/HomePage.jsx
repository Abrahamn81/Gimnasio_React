import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryExercise } from "../components/CategoryExercise";
import { ErrorMessage } from "../components/ErrorMessage";
import { ExercisesList } from "../components/ExercisesList";
import { useCategories } from "../const/categories";
import { AuthContext } from "../context/AuthContext";
import { useExercises } from "../hooks/useExercises";

export const HomePage = () => {
  const {
    exercises,
    loading,
    error,
    removeExercise,
    filterExercises,
    updateLikeExercise,
  } = useExercises("");
  const { categories } = useCategories();
  const { user } = useContext(AuthContext);
  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <p>Inicia sesión</p>;
  return (
    <section>
      {user !== null && user.admin === 1 ? (
        <section>
          <Link to={"/exercises"}>
            <button className="custom-button">Nuevo ejercicio</button>
          </Link>
        </section>
      ) : null}
      <CategoryExercise
        filterExercises={filterExercises}
        categories={categories}
      />
      <h1>Lista de Ejercicios</h1>
      <ExercisesList
        exercises={exercises}
        removeExercise={removeExercise}
        updateLikeExercise={updateLikeExercise}
      />
    </section>
  );
};
