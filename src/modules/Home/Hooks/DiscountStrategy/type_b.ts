import { TYPE_B } from "../Constants/disount_types";
import DiscountStrategyTypeC from "./type_c";

const next = DiscountStrategyTypeC;
const DiscountStrategyTypeB = (type: string, price: number): number => {
    if (type !== TYPE_B)
        return next(type, price);

    let discount = price - (price * 0.2)
    discount += 0.5

    return discount;
}

export default DiscountStrategyTypeB;