import { connect } from 'umi'
import Pager from '@/components/common/Pager'

const mapStateToProps = state => ({
    current: state.queerMod.condition.page,
    limit: state.queerMod.condition.limit,
    total: state.queerMod.result.total,
    panelNumber: 4
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "queerMod/setCondition",
            payload: {
                page: newPage
            }
        })
        dispatch({
            type: "queerMod/fetchMod",
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);