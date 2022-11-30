import React from "react";
import GoodCard from "./GoodCard";


class Galery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [
                {
                    id:1,
                    name: "Коньяк Vaudon Cognac Vaudon XO 0.7 л",
                    image: "https://content1.rozetka.com.ua/goods/images/big/176184618.jpg",
                    price: "2549 грн"
                },
                {
                    id:2,
                    name: "Коньяк Hennessy XO 20 років витримки 0.7 л",
                    image: "https://content.rozetka.com.ua/goods/images/big/10682123.jpg",
                    price: "8900 грн"
                },
                {
                    id:3,
                    name: "Бренді Шустов Київ 15 років 0.7 л",
                    image: "https://content2.rozetka.com.ua/goods/images/big/193536818.jpg",
                    price: "950 грн"
                },
                {
                    id:4,
                    name: "Коньяк Chateau de Montifaud VSOP 0.5 л",
                    image: "https://content.rozetka.com.ua/goods/images/big/13726561.jpg",
                    price: "2090 грн"
                },
                {
                    id:5,
                    name: "Коньяк Maxime Trijol Cognac XO 0.7 л",
                    image: "https://content.rozetka.com.ua/goods/images/big/12116708.jpg",
                    price: "3750 грн"
                },
                {
                    id:6,
                    name: "Бренді Легенда Вірменії 20 років витримки 0.5 л",
                    image: "https://content.rozetka.com.ua/goods/images/big/17297884.jpg",
                    price: "960 грн"
                }
            ]
        }
    }
    render() {
        return (
            <div className="galery">
                {
                    this.state.goods.map((g) => (
                        <GoodCard key={g.id} good={g}/>
                    ))
                }
            </div>
        )
    }
}

export default Galery