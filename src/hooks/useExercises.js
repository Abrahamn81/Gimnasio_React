import { useEffect, useState } from "react";
import { getAllExercisesService } from "../services";

export const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadExercises = async (category) => {
      try {
        setLoading(true);

        const data = await getAllExercisesService(category);
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadExercises(category);
  }, [category]);

  /*   //añadimos el ejercicio nuevo a la lista de ejercicios
  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  }; */
  //actualizamos el estado con los todos los ejercicios con id diferente a la del ejercicio borrado
  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };
  //actualizamos el estado del like de un ejercicio dentro de un listado
  const updateLikeExercise = (id) => {
    const updatedExercises = exercises.map((exercise) =>
      exercise.id === id ? { ...exercise, likes: exercise.likes + 1 } : exercise
    );
    setExercises(updatedExercises);
  };
  //filtrado de ejercicios por categoria

  return {
    exercises,
    loading,
    error,
    removeExercise,
    updateLikeExercise,
    setCategory,
    category,
  };
};
