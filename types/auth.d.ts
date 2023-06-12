export interface FormType {
    formType: 'signin' | 'signup'
}

export type FormValues = {
    formType: FormType
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

type Payload = { token: string | null }

interface UserData {
    name: string;
    profile: number;
    email: string;
}

export interface AuthState {
    user: UserData;
    token: string | null;
    id: string | null;
    error: string | null;
    loading: boolean | false;
}

type DecodedToken = {
    data: {
        id: string;
        name: string;
        email: string;
        profile: number;
        exp: number;
        iat: number;
    }
}