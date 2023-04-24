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