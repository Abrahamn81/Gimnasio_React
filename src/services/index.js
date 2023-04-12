//función para registrarse
export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// función para loguearse
export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// función para obtener información del usuario logueado
export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// función para leer los datos de cualquier usuario
export const getUserDataService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

//petición al backend de un ejercicio
export const singleExerciseService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
//petición al backend de todos los ejercicios
export const getAllExercisesService = async (category = "") => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises?category=${category}`
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// función que se encarga de enviar el formulario de nuevo ejercicio
export const sendNewExerciseService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/exercises`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// función que se encarga de enviar el formulario de editar ejercicio
export const editExerciseService = async ({
  id,
  name,
  category,
  img,
  description,
  token,
}) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ name, category, img, description }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// función para borrar un ejercicio
export const deleteExerciseService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

// función para dar likes
export const likeExerciseService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/exercises/${id}/likes`,
    {
      method: "POST",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
