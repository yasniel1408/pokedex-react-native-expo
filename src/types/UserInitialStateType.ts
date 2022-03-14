import UserType from './UserType';

type UserInitialStateType = {
    user: UserType;
    loading: boolean;
    error: string;
    loggedIn: boolean;
};

export default UserInitialStateType;
