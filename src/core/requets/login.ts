import { instance } from ".";

interface QueryVariables {
  email: string;
  password: string;
}

export const loginRequest = ({ email, password }: QueryVariables) => {
  return instance.post("/v2/api/auth/login", {
    email: email,
    password: password,
  });
};
