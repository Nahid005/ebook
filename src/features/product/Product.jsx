import { RiStarFill, RiStarLine } from "react-icons/ri";

function Product({product}) {
    const {title, image, price, ratings, author} = product;

    return (
        <div className="">
            <div className="">
                <img src={image} alt={title} />
            </div>
            <div className="">
                <h5>{title}</h5>
                <p>{author}</p>
                <div className="flex">
                    <div className="flex">
                        <ul className="flex">
                            <li><RiStarFill /></li>
                            <li><RiStarFill /></li>
                            <li><RiStarFill /></li>
                            <li><RiStarFill /></li>
                            <li><RiStarLine /></li>
                        </ul>
                        <p><span>(108)</span></p>
                    </div>
                    <div className="flex">
                        <h4>150</h4>
                        <p><del>200</del></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;