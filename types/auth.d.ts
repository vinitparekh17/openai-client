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

type AuthState = {
    token: string | null,
    id: string | null,
}

type DecodedToken = {
    data: {
        _id: string;
        exp: number;
        iat: number;
    }
}