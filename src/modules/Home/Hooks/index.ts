import { TYPE_A, TYPE_B, TYPE_C } from "./Constants/disount_types";
import DiscountStrategy from "./DiscountStrategy";

const useHomeHooks = () => {
    const response = [
        { id: 1, title: "Água", price: 10.00, promotion_type: TYPE_A },
        { id: 2, title: "PEPSI", price: 10.00, promotion_type: TYPE_B },
        { id: 3, title: "BRAHMA", price: 10.00, promotion_type: TYPE_C },
        { id: 4, title: "SKOL", price: 10.00, promotion_type: TYPE_A }
    ];



    const getPromotionPrice = (type: string, price: number): number => {
        // if (type === TYPE_A)
        //     return price - (price * 0.1)
        // else if (type === TYPE_B){
        //     let discount = price - (price * 0.2)
        //     discount += 0.5 
        //     return discount
        // }
        // else if (type === TYPE_C)
        //     return price - (price * 0.3)
        // else
        //     return price

        // switch (type) {
        //     case TYPE_A:
        //         return price - (price * 0.1)
        //     case TYPE_B:
        //         let discount = price - (price * 0.2)
        //         discount += 0.5 
        //         return discount
        //     case TYPE_C:
        //         return price - (price * 0.3)
        //     default:
        //         return price
        // }

        return DiscountStrategy(type, price)
    }

    return { response, getPromotionPrice }
}

export default useHomeHooks;