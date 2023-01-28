import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "../../api/user";
import { storageSave } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const userNameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      navigate("/translate");
    }
  }, [user, navigate]);

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await userLogin(username);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }

    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }

    if (errors.username.type === "minLength") {
      return <span>Username is too short (min. 2)</span>;
    }
  })();

  return (
    <>
      <div>
        <div className="text-center fw-bold mb-5 ">Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-4">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              type="text"
              {...register("username", userNameConfig)}
            />
            {errorMessage}
          </div>
          <div className="text-center mb-4 d-grid">
            <button
              type="submit"
              className="btn btn btn-dark"
              disabled={loading}
            >
              Sign In
            </button>
          </div>
          {loading && <p>Logging in...</p>}
          {apiError && <p>{apiError}</p>}
        </form>
      </div>
    </>
  );
};
export default LoginForm;
