import apiPart from "./api";

export const loginUser = async(userDataBabe)=> {
    const responses = await apiPart.post("/auth/login", userDataBabe);
    return responses.data;
}

export const registerUserPart = async(userDataBabe) => {
    const response = await apiPart.post("/auth/register", userDataBabe);
    return response.data;
}