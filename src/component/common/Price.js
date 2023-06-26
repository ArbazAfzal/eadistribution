import { UserContext } from "@context/UserContext";
import { useContext } from "react";

const Price = ({ product, price, card, currency, originalPrice }) => {
  console.log("🚀 ~ file: Price.js:5 ~ Price ~ currency:", currency)
  console.log("🚀 ~ file: Price.js:5 ~ Price ~ card:", card)
  console.log("🚀 ~ file: Price.js:5 ~ Price ~ product:", product)
  console.log("🚀 ~ file: Price.js:5 ~ Price ~ originalPrice:", originalPrice)
  console.log("🚀 ~ file: Price.js:2 ~ Price ~ price:", price)
  const {
    state: { userInfo }
  } = useContext(UserContext);

  return (
    <div className="font-serif product-price font-bold">
      {product?.variants.length > 0 ? (
        <>
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
         { userInfo?<>{currency}
            {price}</> :"" }
          </span>
          {originalPrice > price && !card ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400 ml-1"
                    : "text-lg font-normal text-gray-400 ml-1"
                }
              >
               {userInfo?<> {currency}
                {parseFloat(originalPrice).toFixed(2)}</>:""}
              </del>
            </>
          ) : null}
        </>
      ) : (
        <>
          <span
            className={
              card
                ? "inline-block text-lg font-semibold text-gray-800"
                : "inline-block text-2xl"
            }
          >
           {userInfo?<> {currency}
            {price}</>:""}
          </span>
          {originalPrice > price && card ? (
            <>
              <del
                className={
                  card
                    ? "sm:text-sm font-normal text-base text-gray-400 ml-1"
                    : "text-lg font-normal text-gray-400 ml-1"
                }
              >
                {userInfo?<>{currency}
                {parseFloat(originalPrice).toFixed(2)}</>:""}
              </del>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Price;
