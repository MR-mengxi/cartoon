import { connect } from 'umi'
import Pager from '@/components/common/Pager'

const mapStateToProps = state => ({
    current: state.suspenseMod.condition.page,
    limit: state.suspenseMod.condition.limit,
    total: state.suspenseMod.result.total,
    panelNumber: 4
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "suspenseMod/setCondition",
            payload: {
                page: newPage
            }
        });
        dispatch({
            type: "suspenseMod/fetchMod",
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);