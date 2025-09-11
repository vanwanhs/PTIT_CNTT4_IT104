import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    setKeyword(searchQuery);
  }, [searchParams]);

  const products = [
    "iPhone15",
    "Samsung Galaxy S24",
    "Xiaomi Redmi Note 13",
    "Oppo Find X7",
    "Nokia Lumia 2025",
  ];

  const handleSearch = () => {
    if (keyword.trim()) {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index} className="text-gray-800">
              {product}
            </li>
          ))
        ) : (
          <p className="text-red-500">Không tìm thấy sản phẩm nào.</p>
        )}
      </ul>
    </div>
  );
}
