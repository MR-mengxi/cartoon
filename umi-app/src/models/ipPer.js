import { getPer } from '../services/ipPer'

export default {
    state: {
        condition: {
            page: 1,
            limit: 6
        },
        result: {
            total: 0,
            ipPer: []
        }
    },
    subscriptions: {
        initIpPer({ dispatch }) {
            dispatch({
                type: "fetchIpPer"
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
                result: payload
            }
        }
    },
    effects: {
        *fetchIpPer(action, { put, call, select }) {
            const condition = yield select(state => state.ipPer.condition);
            const { page, limit } = condition;
            const result = yield call(getPer, page, limit);
            yield put({
                type: "setResult",
                payload: {
                    total: result.total,
                    ipPer: result.datas
                }
            })
        }
    }
}