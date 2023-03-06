import { TYPE_C } from "../Constants/disount_types";

const DiscountStrategyTypeC = (type: string, price: number): number => {
    if (type !== TYPE_C)
        return price;

    return price - (price * 0.3);
}

export default DiscountStrategyTypeC