import { connect } from 'umi'
import Shop from '../Shop'

const mapStateToProps = state => ({
    shopList:state.peripheral.result.shopList
})

const mapDispatchToProps = dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Shop);