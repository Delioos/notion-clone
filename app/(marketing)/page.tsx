import "@/app/globals.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <p className="font-bold">Hello notion </p>
      <Button variant="outline" size="lg">
        {" "}
        test{/*  */} button
      </Button>
    </>
  );
}
