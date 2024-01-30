import { UiWrapper } from "@/components/shared";
import CardWrapper from "@/components/shared/CardWrapper";
import { Card } from "@/components/ui/card";

const BentoGrid = () => {
  return (
    <UiWrapper>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="w-full h-full 
           flex justify-center items-center
          "
          >
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
      </div>
    </UiWrapper>
  );
};

export default BentoGrid;
