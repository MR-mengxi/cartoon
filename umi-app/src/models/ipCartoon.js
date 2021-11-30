import { getIpCartoon } from '../services/ipCartoon';

export default {
    state: {
        condition: {
            page: 1,
            limit: 6
        },
        result: {
            total: 0,
            ipCartoon: []
        }
    },
    subscriptions:{
        initIpCartoon({dispatch}){
            dispatch({
                type:"fetchIpCartoon"
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
    effects:{
        *fetchIpCartoon(action,{put,call,select}){
            const condition = yield select(state=>state.ipCartoon.condition);
            const {page,limit} = condition;
            const result = yield call(getIpCartoon,page,limit);
            yield put({
                type:"setResult",
                payload:{
                    total:result.total,
                    ipCartoon:result.datas
                }
            })
        }
    }
}