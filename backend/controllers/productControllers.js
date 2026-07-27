import { sql } from "../config/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await sql`
        SELECT * FROM products
        ORDER BY created_at DESC
        `;

    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "An error in getAllProducts controller",
    });
  }
};

export const createProduct = async (req, res) => {
  const { name, image, price } = req.body;

  if (!name || !image || !price) {
    return res
      .status(400)
      .json({ success: false, message: "All the fields are required" });
  }

  try {
    const newProduct = await sql`
        INSERT INTO products (name, image, price)
        VALUES (${name}, ${image}, ${price})
        RETURNING *
        `;
    res.status(201).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: "An error in createProduct controller",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await sql`
        SELECT * FROM products WHERE id = ${id}
        `;

    res.status(200).json({ success: true, data: product[0] });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: "An error in getProduct controller",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const updatedProduct = await sql`
        UPDATE products SET name=${name}, image=${image}, price=${price} WHERE id=${id} RETURNING *
        `;
    if (updateProduct.length === 0) {
      res.status(404).json({
        success: false,
        message: "Product cannot be found",
      });
    }

    res.status(200).json({ success: true, data: updatedProduct[0] });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "An error in updateProduct controller",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const removeProduct = await sql`
    DELETE FROM products WHERE id = ${id}
    `;
    if (deleteProduct.length === 0) {
      res.status(404).json({
        success: false,
        message: "Product cannot be found",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Product removed succefully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in deleteProcut controller",
    });
  }
};
