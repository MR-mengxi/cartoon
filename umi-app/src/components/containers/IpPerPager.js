import { connect } from 'umi'
import Pager from '../common/Pager'

const mapStateToProps = state => ({
    current: state.ipPer.condition.page,
    limit: state.ipPer.condition.limit,
    total: state.ipPer.result.total,
    panelNumber: 5
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "ipPer/setCondition",
            payload: {
                page: newPage
            }
        });
        dispatch({
            type: "ipPer/fetchIpPer"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pager);