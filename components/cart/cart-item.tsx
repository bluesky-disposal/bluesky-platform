"use client";

import { Trash2, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  rentalPeriod: string;
  image: string;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({
  id,
  name,
  price,
  quantity,
  rentalPeriod,
  image,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4 sm:gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Crect fill='%23e2e8f0' width='128' height='128'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='%2394a3b8'%3ENo Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">
            {name}
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Rental Period: {rentalPeriod}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Price */}
            <div>
              <p className="text-2xl font-bold text-slate-900">
                ${price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1 w-fit">
              <button
                onClick={() =>
                  onQuantityChange(id, quantity - 1)
                }
                className="p-2 hover:bg-slate-200 rounded transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-3 py-2 font-semibold text-slate-900 min-w-[2.5rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() =>
                  onQuantityChange(id, quantity + 1)
                }
                className="p-2 hover:bg-slate-200 rounded transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Total Price */}
            <div className="text-right">
              <p className="text-sm text-slate-600 mb-1">Total</p>
              <p className="text-xl sm:text-2xl font-bold text-slate-900">
                ${(price * quantity).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(id)}
            className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <Trash2 size={18} />
            <span className="text-sm font-medium">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}
