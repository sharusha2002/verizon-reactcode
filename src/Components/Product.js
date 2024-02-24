import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
const Product = () => {
    return (
        <div className="text-center">
               <h1>Product</h1>
               <Link to="/addProduct" className="btn btn-info">Add Product</Link>
               <table className="my-5">
                <thead>
                    <tr>
                        <td>S.No</td>
                        <td>Product ID</td>
                        <td>Product Name</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1001</td>
                            <td>Iphone 13 Pro</td>
                            <td><ButtonComponent/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1002</td>
                            <td>Redmi Note 8</td>
                            <td><ButtonComponent/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>1003</td>
                            <td>Samsung Galaxy Ultra 16 Pro</td>
                            <td><ButtonComponent/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1002</td>
                            <td>Redmi Note 8</td>
                            <td><ButtonComponent/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1002</td>
                            <td>Redmi Note 8</td>
                            <td><ButtonComponent/></td>
                        </tr>
                    </tbody>
               </table>
        </div>
    )
}

export default Product;