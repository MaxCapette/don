import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export default function UselessAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="faq-section w-full max-w-2xl mx-auto mt-8"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" glassmorphism-container bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            What is this platform about?
          </h3>
        </AccordionTrigger>
        <AccordionContent className="  glassmorphism-container dark:bg-gray-900 p-4 rounded-lg shadow-md mt-2">
          <p className="text-gray-700 dark:text-gray-300">
            This platform is designed to help you do absolutely nothing.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className=" glassmorphism-container bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            How can I update my profile?
          </h3>
        </AccordionTrigger>
        <AccordionContent className=" glassmorphism-container dark:bg-gray-900 p-4 rounded-lg shadow-md mt-2">
          <p className="text-gray-700 dark:text-gray-300">
            There is no profile.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className=" glassmorphism-container bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            How do I find specific apps?
          </h3>
        </AccordionTrigger>
        <AccordionContent className=" glassmorphism-container dark:bg-gray-900 p-4 rounded-lg shadow-md mt-2">
          <p className="text-gray-700 dark:text-gray-300">
          Absolument.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
