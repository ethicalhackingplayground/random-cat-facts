import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [fact, setFact] = useState("");
  const [loaded, setLoaded] = useState(false);

  const getFactFromAPI = async () => {
    let response = await axios.get("https://meowfacts.herokuapp.com/");
    let data = response.data.data;
    setFact(data[0]);
  };

  useEffect(() => {
    if (!loaded) {
      getFactFromAPI();
    }
  }, [loaded]);

  return (
    <div className="p-4 flex flex-1 flex-col items-center justify-center">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://live.staticflickr.com/2275/2473970479_de756f0fbb_b.jpg"
            width={570}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-8 items-center">
          <div className="font-semibold text-lg">{fact}</div>
        </CardBody>
      </Card>
    </div>
  );
}
