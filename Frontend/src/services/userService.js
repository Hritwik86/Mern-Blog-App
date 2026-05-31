import apiPart from "./api";

export const GettingProfilePart = async (userDataBabe) => {
    const response = await apiPart.post("/users/profile", userDataBabe);
    return response.data;
}