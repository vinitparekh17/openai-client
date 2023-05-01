import type { FormValues } from "../types/auth";

export const authSubmit = async (data: FormValues): Promise<any> => {
    try {
        const { formType } = data
        await fetch(`https://api.omnisive.technetic.co.in/api/user/${formType}`, {
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
                if(localStorage.getItem("token")){
                    window.location.href = "/conversations";
                }
            }
            })
    } catch (error) {
        console.log(error);
    }
}

export const authSignOut = async (): Promise<any> => {
    try {
        await fetch("http://54.250.183.65:8080/api/user/signout", {
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