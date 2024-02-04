import { UiWrapper } from "@/components/shared";
import V2Wrapper from "@/components/shared/Wrapper-v2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SocialGrid = () => {
  return (
    <UiWrapper>
      <div className="grid grid-cols-3 gap-4 px-32">
        <Card>
          <CardHeader>
            <CardTitle>Github</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Linked In</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gmail</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </UiWrapper>
  );
};

export default SocialGrid;
