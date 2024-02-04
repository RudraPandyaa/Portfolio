import { UiWrapper } from "@/components/shared";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import React from "react";

export default function OverView() {
  return (
    <UiWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-14 px-32">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>
              <span className="text-amber-200"> Building </span> | Experience
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam voluptatibus suscipit natus impedit dolore repudiandae, odit
              molestiae animi aliquam eos dolorum cumque quasi itaque
              praesentium reiciendis rerum velit esse.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full items-center">
              <div className="text-muted-foreground">See More</div>
              <Button variant={"ghost"}>
                <ExternalLink />
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <span className="text-amber-200"> Learnings </span> | Education
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam voluptatibus suscipit natus impedit dolore repudiandae, odit
              molestiae animi aliquam eos dolorum cumque quasi itaque
              praesentium reiciendis rerum velit esse.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full items-center">
              <div className="text-muted-foreground">See More</div>
              <Button variant={"ghost"}>
                <ExternalLink />
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activities</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam voluptatibus suscipit natus impedit dolore repudiandae, odit
              molestiae animi aliquam eos dolorum cumque quasi itaque
              praesentium reiciendis rerum velit esse.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full items-center">
              <div className="text-muted-foreground">See More</div>
              <Button variant={"ghost"}>
                <ExternalLink />
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ipsam voluptatibus suscipit natus impedit dolore repudiandae, odit
              molestiae animi aliquam eos dolorum cumque quasi itaque
              praesentium reiciendis rerum velit esse.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between w-full items-center">
              <div className="text-muted-foreground">See More</div>
              <Button variant={"ghost"}>
                <ExternalLink />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </UiWrapper>
  );
}
