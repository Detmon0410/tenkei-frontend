import { useContext } from "react";
import { OrderListContext } from "../contexts/OrderListContext";

export function useOrderList() {
  return useContext(OrderListContext);
}