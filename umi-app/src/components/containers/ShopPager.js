import { connect } from 'umi'
import Pager from '../common/Pager'

const mapStateToProps = state => ({
    current: state.peripheral.condition.page,
    limit: state.peripheral.condition.limit,
    total: state.peripheral.result.total,
    panelNumber: 5
})

const mapDispatchToProps = dispatch => ({
    onPageChange(newPage) {
        dispatch({
            type: "peripheral/setCondition",
            payload: {
                page: newPage
            }
        })
        dispatch({
            type:"peripheral/fetchShop"
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager);