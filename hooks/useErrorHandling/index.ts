import axios, { AxiosError } from "axios";

function useErrorHandling(error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response?.data?.message) {
            return axiosError.response.data.message;
        } else {
            return "Something went wrong";
        }
    } else {
        return "server error";
    }
}

export default useErrorHandling;
