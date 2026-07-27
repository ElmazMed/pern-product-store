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
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: "An error in createProduct controller",
    });
  }
};

export const getProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
