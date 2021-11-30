import {connect} from 'umi'
import IpCartoonCard from '../IpContainer/IpCartoonCard'

const mapStateToProps = state=>({
    cards:state.ipPlay.result.ipPlay
})

export default connect(mapStateToProps,null)(IpCartoonCard)