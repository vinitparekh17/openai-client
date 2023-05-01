import type { FormValues } from "../types/auth";

export const authSubmit = async (data: FormValues): Promise<any> => {
    try {
        const { formType } = data
        await fetch(`http://localhost:8080/api/user/${formType}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
        }).then(res => res.json())
        .then(data => {
            if (data.token) {
                const { token } = data
                localStorage.setItem("token", token)
            }
            })
    } catch (error) {
        console.log(error);
    }
}

export const authSignOut = async (): Promise<any> => {
    try {
        await fetch("http://localhost:8080/api/user/signout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
        }).then(res => res.json())
            .then(data => {
                if (data.message) {
                    localStorage.removeItem("token")
                    window.location.href = "/login";
                }
            })
    } catch (error) {
        console.log(error);
    }
}