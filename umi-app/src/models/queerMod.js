import { getMods } from '../services/mod';

export default {
    state: {
        condition: {
            page: 1,
            limit: 20
        },
        result: {
            modTitle: "奇幻",
            router:"",
            total: 0,
            data: []
        }
    },
    subscriptions: {
        initMod({ dispatch }) {
            dispatch({
                type: "fetchMod"
            })
        }
    },
    reducers: {
        setCondition(state, { payload }) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state, { payload }) {
            return {
                ...state,
                result: {
                    ...state.result,
                    ...payload
                }
            }
        }
    },
    effects: {
        *fetchMod(action, { put, call, select }) {
            const condition = yield select(state => state.queerMod.condition);
            let { page, limit } = condition;
            const result = yield call(getMods, page, limit);
            yield put({
                type: "setResult",
                payload: {
                    total: result.total,
                    data: result.datas
                }
            })
        }
    }
}