// src/components/ProductDisplay/ProductDisplay.tsx
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      {showDescription && (
        <p className="text-sm mt-2 text-gray-600">{product.description}</p>
      )}
      {showStockStatus && (
        <p className={`mt-2 font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};
