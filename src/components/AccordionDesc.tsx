import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const AccordionDesc = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full pt-4"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-2xl">Product Info</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Introducing our Scandinavian-inspired chair, meticulously designed
            to infuse your living space with a touch of retro elegance. Crafted
            with the finest materials and attention to detail, this chair
            embodies the timeless charm of Scandinavian design, making it a
            versatile addition to any home decor. With its classic silhouette
            and understated sophistication, it seamlessly integrates into
            various interior styles, bringing both style and functionality to
            your room.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-2xl">Features</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <ul>
            <li>
              <span className="text-xl font-bold">Timeless design :</span>{" "}
              Inspired by Scandinavian aesthetics, this chair boasts a sleek and
              retro-inspired silhouette that adds a touch of elegance to any
              space.
            </li>
            <li>
              <span className="text-xl font-bold">Durable construction :</span>{" "}
              Crafted with high-quality materials, the chair is built to last,
              providing sturdy and reliable seating for years to come.
            </li>
            <li>
              <span className="text-xl font-bold">Versatile placement :</span>{" "}
              Whether as a focal point in your living room, a cozy reading
              corner in your study, or an inviting seat around the dining table,
              this chair effortlessly adapts to different settings.
            </li>
            <li>
              <span className="text-xl font-bold">Comfortable seating :</span>{" "}
              The chair features a well-padded seat and backrest, ensuring
              optimal comfort for extended periods of relaxation or
              conversation.
            </li>
            <li>
              <span className="text-xl font-bold">Easy maintenance :</span>{" "}
              Designed for convenience, the chair&apos;s upholstery is easy to
              clean, allowing for hassle-free maintenance and care.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-2xl">
          Warranty information
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind the quality of our products. Our chair comes with a
            10-year warranty, guaranteeing against defects in materials and
            workmanship under normal use. In the unlikely event that you
            encounter any issues with your chair, contact our customer service
            team, and we will be happy to assist you with a replacement or
            repair
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-2xl">
          Delivery and shipping
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We understand the importance of timely delivery and strive to
            provide a seamless shipping experience for our customers. Upon
            placing your order, our team will process it promptly, and you will
            receive a notification once your chair is ready for shipment. We
            offer various shipping options to accommodate your preferences, with
            estimated delivery times provided at checkout. Rest assured, your
            chair will be carefully packaged to ensure it arrives safely at your
            doorstep, ready to enhance your home with its timeless charm.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDesc;
