import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { getUser, setUser, toggleLoading } from "./app/features/atuh/authSlice";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import Loading from "./components/reusable/Loading";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch, isLoading]);

  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
