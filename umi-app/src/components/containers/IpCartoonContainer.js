import { connect } from 'umi';
import IpCartoonCard from '../IpContainer/IpCartoonCard';

const mapStateToProps = state => ({
    cards: state.ipCartoon.result.ipCartoon
});

export default connect(mapStateToProps, null)(IpCartoonCard);