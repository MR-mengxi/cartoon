import { connect } from 'umi'
import Pager from '../common/Pager'

const mapStateToProps = state => ({
    current: state.ipCartoon.condition.page,
    limit: state.ipCartoon.condition.limit,
    total: state.ipCartoon.result.total,
    panelNumber: 5
});

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "ipCartoon/setCondition",
            payload: {
                page: newPage
            }
        });
        dispatch({
            type:"ipCartoon/fetchIpCartoon"
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager);