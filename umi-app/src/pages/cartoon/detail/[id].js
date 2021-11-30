import React, { Component } from 'react'
import CartoonDetail from '@/components/CartoonDetail'
import MessageArea from '@/components/common/MessageArea'
import { getMod } from '@/services/mod'
import { getMessage } from '@/services/message'
import { addMessage } from '@/services/message'
import './index.css'

export default class detail extends Component {
    state = {
        modDetail: {},
        modId: this.props.match.params.id,
        page: 1,
        limit: 10,
        datas: {
            total: 0,
            datas: []
        }
    }

    async componentDidMount() {
        const resp = await getMod(this.state.modId);
        this.setState({
            modDetail: resp
        })
        const datas = await getMessage(this.state.page, this.state.limit, this.state.modId);
        this.setState({
            ...this.state,
            datas: datas
        })
    }



    onValueChange = async (formData) => {
        const newFormData = {
            ...formData,
            ModId: this.state.modId,
            avatar: "https://img0.baidu.com/it/u=2389087487,3629583492&fm=26&fmt=auto",
            time: 562970100188
        }
        await addMessage(newFormData);
        this.setState({
            ...this.state,
            datas: {
                ...this.state.datas,
                total: this.state.datas.total + 1,
                datas: [newFormData, ...this.state.datas.datas]
            }
        })
    }

    render() {
        return (
            <div className="detail">
                <CartoonDetail modDetail={this.state.modDetail} />
                <MessageArea onValueChange={this.onValueChange} datas={this.state.datas} />
            </div>
        )
    }
}
