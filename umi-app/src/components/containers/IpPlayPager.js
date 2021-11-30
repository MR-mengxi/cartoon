import { connect } from 'umi'
import Pager from '../common/Pager'

const mapStateToProps = state => ({
    current: state.ipPlay.condition.page,
    limit: state.ipPlay.condition.limit,
    total: state.ipPlay.result.total,
    panelNumber: 5
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "ipPlay/setCondition",
            payload: {
                page: newPage
            }
        });
        dispatch({
            type: "ipPlay/fetchIpPlay"
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager);