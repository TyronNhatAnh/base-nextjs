interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  payload: {
    id_token: string;
    fullName: string;
    name: string;
  };
}

interface ChangePasswordResponse {
  payload: string;
}

interface User {
  id?: any;
  login?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activated?: boolean;
  langKey?: string;
  authorities?: any[];
  createdBy?: string;
  createdDate?: Date | null;
  lastModifiedBy?: string;
  lastModifiedDate?: Date | null;
  password?: string;
}
