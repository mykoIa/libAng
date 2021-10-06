export interface User {
  id: string;
  login: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  status: string;
  authenticated: boolean;
}
