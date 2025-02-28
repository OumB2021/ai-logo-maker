import { pricingPlans } from "@/constants/price";

function PriceOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`flex flex-col border rounded-md p-6 shadow-sm bg-zinc-50 border-zinc-200 h-full ${
            plan.recommended && "border-purple-500"
          }`}
        >
          {plan.recommended && (
            <span className="bg-purple-500 mx-auto text-white size-fit text-base px-3 py-1 rounded-md uppercase font-bold tracking-wide">
              Most Popular
            </span>
          )}
          <div className="flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold mt-4">{plan.title}</h3>
            <p className="text-4xl font-bold text-zinc-900 mt-2">
              {plan.price}
            </p>
            <p className="text-zinc-600 mt-2">{plan.description}</p>
            <ul className="mt-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-sm md:text-base ml-2 text-zinc-500">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full py-2 text-white font-semibold rounded-md transition ${plan.buttonColor}`}
            >
              {plan.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PriceOptions;
