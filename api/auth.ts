import jwtDecode from 'jwt-decode';
import type { FormValues } from "../type/auth"

export const authSubmit = async (data: FormValues): Promise<any> => {
    try {
        const { formType } = data
        await fetch(`http://localhost:8080/api/user/${formType}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Set-Cookie": "chatplus-token"
            },
            body: JSON.stringify(data),
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                if (data.token) {
                    const { token } = data
                    const decoded = jwtDecode(token)
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(decoded))
                }
            })
    } catch (error) {
        console.log(error);
    }
}