import { getShop } from '../services/shop'

export default {
    state: {
        condition: {
            page: 1,
            limit: 8,
        },
        result: {
            total: 0,
            shopList: []
        }
    },
    subscriptions:{
        initShop({dispatch}){
            dispatch({
                type:"fetchShop"
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
        *fetchShop(action, { put, call, select }) {
            const condition = yield select(state => state.peripheral.condition);
            let {page,limit} = condition;
            const result = yield call(getShop,page,limit);
            yield put({
                type: "setResult",
                payload: {
                    total: result.total,
                    shopList: result.datas
                }
            })
        }
    }
}