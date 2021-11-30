import { login } from '../services/admin';

export default {
    state: {
        user: {
            loginId: "",
            loginPwd: "",
            avatar: ""
        }
    },
    reducers: {
        setUser(state, { payload }) {
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                }
            }
        }
    },
    effects: {
        *login(action, { put, call, select }) {
            const user = yield select(state => state.admin.user);
            let { loginId, loginPwd } = user;
            const result = yield call(login, loginId, loginPwd);
            localStorage.setItem("userInfo", result);
        }
    }
}