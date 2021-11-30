import { connect } from 'umi'
import Pager from '@/components/common/Pager'

const mapStateToProps = state => ({
    current: state.warmMod.condition.page,
    limit: state.warmMod.condition.limit,
    total: state.warmMod.result.total,
    panelNumber: 4
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "warmMod/setCondition",
            payload: {
                page: newPage
            }
        })
        dispatch({
            type: "warmMod/fetchMod",
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);