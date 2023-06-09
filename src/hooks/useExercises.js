import { useContext, useEffect, useState } from "react";
import { getAllExercisesService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [favorites, setFavorites] = useState("");
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const loadExercises = async (category, favorites) => {
      try {
        setLoading(true);
        let data = await getAllExercisesService({ category, token });

        if (favorites) data = data.filter((x) => x.userLikes === 1);
        setExercises(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadExercises(category, favorites);
    } else {
      setExercises([]);
    }
  }, [category, favorites, token]);

  //actualizamos el estado con los todos los ejercicios con id diferente a la del ejercicio borrado
  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };
  //actualizamos el estado del like de un ejercicio dentro de un listado
  const updateLikeExercise = (id, addLike) => {
    const updatedExercises = exercises.map((exercise) =>
      exercise.id === id
        ? {
            ...exercise,
            likes: addLike ? exercise.likes + 1 : exercise.likes - 1,
            userLikes: addLike ? 1 : 0,
          }
        : exercise
    );
    setExercises(updatedExercises);
  };

  return {
    exercises,
    loading,
    error,
    removeExercise,
    updateLikeExercise,
    setCategory,
    setFavorites,
    category,
    favorites,
  };
};
