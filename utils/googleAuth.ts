import toast from "react-hot-toast";
import { useFetch } from "../hooks"

export const GoogleAuth = (data: GoogleAuth) => {
    useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/user/google`, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(({ err, res }) => {
        if (!err && res) {
            toast.success('You have successfully signed in');
        } else {
            toast.error(res.message);
        }
    }).catch((error: unknown) => {
        error instanceof Error && console.error(error.message);
        toast.error('An error occurred while processing your request');
    })
}