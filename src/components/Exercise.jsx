import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteExerciseService, likeExerciseService } from "../services";
import { NotificationManager } from "react-notifications";

export const Exercise = ({ exercise, removeExercise, updateLikeExercise }) => {
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // función para borrar un ejercicio
  const deleteExercise = async (id) => {
    try {
      await deleteExerciseService({ id, token });
      NotificationManager.success(
        "Ejercicio eliminado correctamente",
        "",
        6000
      );
      if (removeExercise) {
        removeExercise(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // función para dar un like
  const likeExercise = async (id) => {
    try {
      await likeExerciseService({ id, token });
      if (updateLikeExercise) {
        updateLikeExercise(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      NotificationManager.error(error.message, "", 6000);
      //setError(error.message);
    }
  };

  return (
    <article>
      <p className="category">
        <span>{exercise.category}</span>
      </p>
      <h2>
        <Link to={`/exercises/${exercise.id}/details`}>{exercise.name}</Link>
      </h2>

      <section className="img-description">
        {exercise.img ? (
          <img
            alt=""
            src={`${process.env.REACT_APP_BACKEND}/uploads/${exercise.img}`}
          ></img>
        ) : null}
        <p className="description">{exercise.description}</p>
      </section>
      <p className="likes">⭐ Likes: {exercise.likes}</p>

      {user !== null && user.admin === 1 ? (
        <section className="section-buttons">
          <ul className="btn-exercise">
            <li>
              <Link to={`/exercises/${exercise.id}/edit`} state={exercise}>
                <button
                  className="edit-button"
                  title="Editar ejercicio"
                ></button>
              </Link>
            </li>
            <li>
              <button
                title="Eliminar ejercicio"
                className="delete-button"
                onClick={() => {
                  if (window.confirm("Confirmamos el borrado?"))
                    deleteExercise(exercise.id);
                }}
              ></button>
            </li>
          </ul>
        </section>
      ) : null}

      {user && user.admin !== 1 ? (
        <section className="section-buttons">
          <ul className="btn-exercise">
            <li>
              <button
                title="Like"
                className="like-button"
                onClick={() => {
                  likeExercise(exercise.id);
                }}
              ></button>
            </li>
          </ul>
        </section>
      ) : null}

      {error ? <p className="msg-error">{error}</p> : null}
    </article>
  );
};
