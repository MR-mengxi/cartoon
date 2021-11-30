import { connect } from 'umi'
import IpCartoonCard from '../IpContainer/IpCartoonCard';

const mapStateToProps = state => ({
    cards: state.ipPer.result.ipPer
});

export default connect(mapStateToProps, null)(IpCartoonCard);