export type AuthAPI_Auth = (data: {
  username: string;
  password: string;
}) => Promise<{
  accessToken: string;
}>;
