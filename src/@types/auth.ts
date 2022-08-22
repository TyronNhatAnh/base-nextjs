interface AuthStore {
  [x: string]: any;
  loading: boolean;
  token: string;
  needChangePwd: boolean;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  payload: {
    id_token: string;
    needChangePwd: boolean;
    distributorCode: string;
    distributorName: string;
    fullName: string;
    groupCode: string;
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
