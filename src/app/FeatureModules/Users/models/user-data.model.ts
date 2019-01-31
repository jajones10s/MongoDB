export interface UserModel {
    userName: string;
    id: number;
    email: string;
}

export interface UsersDataModel {
    data: Array<UserModel>
}