import { connect } from 'umi'
import Pager from '@/components/common/Pager'

const mapStateToProps = state => ({
    current: state.funnyMod.condition.page,
    limit: state.funnyMod.condition.limit,
    total: state.funnyMod.result.total,
    panelNumber: 4
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "funnyMod/setCondition",
            payload: {
                page: newPage
            }
        })
        dispatch({
            type: "funnyMod/fetchMod",
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);