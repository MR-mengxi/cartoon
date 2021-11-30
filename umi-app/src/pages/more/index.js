import React, { Component } from 'react'
import QueerModPager from '@/components/containers/more/QueerModPager'
import SuspenseModPager from '@/components/containers/more/SuspenseModPager'
import WarmModPager from '@/components/containers/more/WarmModPager'
import DayModPager from '@/components/containers/more/DayModPager'
import FunnyModPager from '@/components/containers/more/FunnyModPager'
import QueerModContainer from '@/components/containers/more/QueerModContainer'
import SuspenseModContainer from '@/components/containers/more/SuspenseModContainer'
import WarmModContainer from '@/components/containers/more/WarmModContainer'
import DayModContainer from '@/components/containers/more/DayModContainer'
import FunnyModContainer from '@/components/containers/more/FunnyModContainer'
import styles from './index.css'

export default class more extends Component {

    state = {
        current: 0,
        modType: ["奇幻", "悬疑", "热血", "日常", "搞笑"]
    }

    toChange(target) {
        if (this.state.current === target) {
            return;
        }
        this.setState({
            current: target
        })
        const mods = document.querySelectorAll(`.${styles["mod-item"]}`);
        for (let i = 0; i < this.state.modType.length; i++) {
            if (i === target) {
                mods[i].className = `${styles["mod-item"]} ${styles.show}`;
            } else {
                mods[i].className = styles["mod-item"];
            }
        }
    }

    render() {
        const types = [];
        for (let i = 0; i < this.state.modType.length; i++) {
            const mod = this.state.modType;
            types.push(
                <li key={i} className={i === this.state.current ? `${styles.type} ${styles.active}` : `${styles.type}`} onClick={() => {
                    this.toChange(i)
                }}>
                    {mod[i]}
                </li>
            )
        }
        return (
            <div className={styles.more}>
                <div className={styles.type}>
                    <ul className={styles["more-nav"]}>
                        {types}
                    </ul>
                </div>
                <div className={styles["mod-list"]}>
                    <div className={`${styles["mod-item"]} ${styles.show}`}>
                        <ul className="mod">
                            <QueerModContainer />
                        </ul>
                        <div className="more-pager">
                            <QueerModPager />
                        </div>
                    </div>
                    <div className={styles["mod-item"]}>
                        <ul className="mod">
                            <SuspenseModContainer />
                        </ul>
                        <div className="more-pager">
                            <SuspenseModPager />
                        </div>
                    </div>
                    <div className={styles["mod-item"]}>
                        <ul className="mod">
                            <WarmModContainer />
                        </ul>
                        <div className="more-pager">
                            <WarmModPager />
                        </div>
                    </div>
                    <div className={styles["mod-item"]}>
                        <ul className="mod">
                            <DayModContainer />
                        </ul>
                        <div className="more-pager">
                            <DayModPager />
                        </div>
                    </div>
                    <div className={styles["mod-item"]}>
                        <ul className="mod">
                            <FunnyModContainer />
                        </ul>
                        <div className="more-pager">
                            <FunnyModPager />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
