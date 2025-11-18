import React, { useEffect, useState } from "react";
import { Row, Col, Card, Skeleton } from "antd";
import productData from "../Database/Product.json";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
}

export const ProductList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData); 
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Skeleton active className="mt-20"/>;

  return (
    <Row justify="center" className="mx-10 mt-10 mb-10">
      {products.map((product) => (
        <Col span={8} key={product.id} className="mb-10">
          <Card title={product.name} className="w-[300px] mb-6">
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>In stock: {product.inStock ? "Yes" : "No"}</p>
            <p>Rating: {product.rating}</p>
            <p>Description: {product.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
