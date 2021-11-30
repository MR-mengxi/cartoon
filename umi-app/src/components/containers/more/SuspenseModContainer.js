import { connect } from 'umi'
import Mod from '@/components/common/Mod'

const mapStateToProps = state => ({
   mod:state.suspenseMod.result,
   isShow:false,
   style:{margin:"0 18px 40px 0"}
});


export default connect(mapStateToProps, null)(Mod);