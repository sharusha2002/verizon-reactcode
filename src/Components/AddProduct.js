import React from "react";

const AddProduct = () => {
    return (
        <div>
                <h1 className="text-center">Product Form</h1>
                <form className="text-center mx-5">
                    <table>
                        <tr>
                            <td>
                                <label for="productname">Product Name</label>
                            </td>
                            <td>
                                <input type="text" name="productname" placeholder="Enter Product Name"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="productprice">Product Price</label>
                            </td>
                            <td>
                                <input type="text" name="productprice" placeholder="Enter Product Price"/>
                            </td>
                        </tr>
                    </table>
                </form>
        </div>
    )
}

export default AddProduct;