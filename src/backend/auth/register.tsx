import { createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import { authen } from "../config";

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const credentials = await createUserWithEmailAndPassword(
    authen,
    email,
    password,
  )
    .then((res) => console.log(res))
    .catch((err) => alert(err));
};
