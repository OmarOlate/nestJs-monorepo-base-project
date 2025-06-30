export type AuthenticateUserOutputDto = Readonly<{
  token: string;
  userData: UserDataToken;
}>;

type UserDataToken = Readonly<{
  rut: string;
  code: string;
  name: string;
  fatherLastName: string;
  motherLastName: string;
  email: string;
  status: string;
}>;
