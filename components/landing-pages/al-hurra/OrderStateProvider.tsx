"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { deliveryFeeFor } from "./format";
import type { LandingContent } from "./types";

/* The selected pack and quantity drive both the order form and the fixed
   sticky bar, which sit far apart in the tree. One small context is the
   lightest way to share them — no store library needed for two values.

   The whole content object rides along so the client components below can read
   their copy without each page re-importing it. */

type OrderState = {
  content: LandingContent;
  packIndex: number;
  quantity: number;
  selectPack: (index: number) => void;
  changeQuantity: (delta: number) => void;
  /** Pack price times quantity, before delivery. */
  productPrice: number;
  /** Zero while a pack marked `freeDelivery` is selected. */
  deliveryFee: number;
  freeDelivery: boolean;
  total: number;
  canDecrease: boolean;
  canIncrease: boolean;
};

const OrderStateContext = createContext<OrderState | null>(null);

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function OrderStateProvider({
  content,
  children,
}: {
  content: LandingContent;
  children: ReactNode;
}) {
  const { config, packs } = content;
  const [packIndex, setPackIndex] = useState(() => clamp(config.defaultPack - 1, 0, packs.length - 1));
  const [quantity, setQuantity] = useState(config.minQuantity);

  const selectPack = useCallback(
    (index: number) => setPackIndex(clamp(index, 0, packs.length - 1)),
    [packs.length]
  );

  const changeQuantity = useCallback(
    (delta: number) =>
      setQuantity((current) => clamp(current + delta, config.minQuantity, config.maxQuantity)),
    [config.minQuantity, config.maxQuantity]
  );

  const value = useMemo<OrderState>(() => {
    const pack = packs[packIndex];
    const productPrice = pack.price * quantity;
    const deliveryFee = deliveryFeeFor(config, pack.freeDelivery);

    return {
      content,
      packIndex,
      quantity,
      selectPack,
      changeQuantity,
      productPrice,
      deliveryFee,
      freeDelivery: Boolean(pack.freeDelivery),
      total: productPrice + deliveryFee,
      canDecrease: quantity > config.minQuantity,
      canIncrease: quantity < config.maxQuantity,
    };
  }, [content, config, packs, packIndex, quantity, selectPack, changeQuantity]);

  return <OrderStateContext.Provider value={value}>{children}</OrderStateContext.Provider>;
}

export function useOrderState(): OrderState {
  const value = useContext(OrderStateContext);
  if (!value) {
    throw new Error("useOrderState must be used inside <OrderStateProvider>");
  }
  return value;
}
