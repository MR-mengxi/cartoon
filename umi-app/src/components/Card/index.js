import React from 'react'
import styles from './index.css'

export default function Card(props) {

    const cards = props.cards.map((card, i) => (
        <li className={styles["card-item"]} key={card.id}>
            <div className={styles["card-img"]}>
                <img src={card.bg} alt="" />
            </div>
            <div className={styles["card-right"]}>
                <span className={styles["card-title"]}>{card.title}</span>
                <p className={styles["card-subTitle"]}>{card.subTitle}</p>
            </div>
        </li>
    ))
    return (
        <div className={styles["cards"]}>
            <ul className={styles["card-list"]}>
                {cards}
            </ul>
        </div>
    )
}

// export default class Card extends Component {
//     state = {
//         cards: [
//             { id: 1, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg", title: "card1", subTitle: "在阳光下生长的人们，在黑暗里远行着。" },
//             { id: 2, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg", title: "card2", subTitle: "我们渴望着在不为人知的岁月里，有着惊世骇俗的经历。" },
//             { id: 3, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg", title: "card3", subTitle: "生如夏花，愿世界如你我一般，这样寂静。" },
//             { id: 4, img: "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg", title: "card4", subTitle: "夜笙" },
//         ]
//     }
//     render() {
//         const cards = this.state.cards.map((card, i) => (
//             <li className={styles["card-item"]} key={i}>
//                 <div className={styles["card-img"]}>
//                     <img src={card.img} alt="" />
//                 </div>
//                 <div className={styles["card-right"]}>
//                     <span className={styles["card-title"]}>{card.title}</span>
//                     <p className={styles["card-subTitle"]}>{card.subTitle}</p>
//                 </div>
//             </li>
//         ))
//         return (
//             <div className={styles["cards"]}>
//                 <ul className={styles["card-list"]}>
//                     {cards}
//                 </ul>
//             </div>
//         )
//     }
// }
