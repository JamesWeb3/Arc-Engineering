import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { IconChart } from '@/components/icons';

const cardsData = [
  {
    title: "Scale your business and sales model.",
    description: "For anyone to start building their real estate portfolio, no matter the size of your wallet.",
    icon: <IconChart />
  },
  {
    title: "Customize assets and components",
    description: "Software as a Service integrations allow both clients and creators to extract maximum value from a tool",
    icon: <IconChart />
  },
  {
    title: "Real-Time Data Processing",
    description: "Grasping the cost of acquiring customers and the price of rendering the service.",
    icon: <IconChart />
  }
];

const CardComponent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Badge text="FEATURES"></Badge>
      <h2 className="text-3xl">Drive Business Growth with Actionable Insights</h2>
      <p className="text-sm">
        Our advanced data analytics feature offers unparalleled real-time
        insights, allowing you to stay ahead of market trends and customer
        preferences.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index}>
            <div className="p-5 bg-[#252428] border border-[#2E2F32] rounded-xl mb-4">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p className="text-sm font-thin">{card.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
