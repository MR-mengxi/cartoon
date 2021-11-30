import { getPlay } from '../services/ipPlay';

export default {
    state: {
        condition: {
            page: 1,
            limit: 6
        },
        result: {
            total: 0,
            ipPlay: []
        }
    },
    subscriptions: {
        initIpPlay({ dispatch }) {
            dispatch({
                type: "fetchIpPlay"
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
        *fetchIpPlay(action, { put, call, select }) {
            const condition = yield select(state => state.ipPlay.condition);
            const { page, limit } = condition;
            const result = yield call(getPlay, page, limit);
            yield put({
                type: "setResult",
                payload: {
                    total: result.total,
                    ipPlay: result.datas
                }
            })
        }
    }
}