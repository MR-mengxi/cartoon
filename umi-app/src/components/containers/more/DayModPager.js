import { connect } from 'umi'
import Pager from '@/components/common/Pager'

const mapStateToProps = state => ({
    current: state.dayMod.condition.page,
    limit: state.dayMod.condition.limit,
    total: state.dayMod.result.total,
    panelNumber: 4
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "dayMod/setCondition",
            payload: {
                page: newPage
            }
        })
        dispatch({
            type: "dayMod/fetchMod"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);