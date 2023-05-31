import diesel3 from "./assets/images/diesel3.jpg";
import diesel4 from "./assets/images/diesel4.jpg";
import diesel5 from "./assets/images/diesel5.jpg";
import diesel6 from "./assets/images/diesel6.jpg";
import diesel7 from "./assets/images/diesel7.jpg";
import diesel8 from "./assets/images/diesel8.jpg";
// import diesel9 from "./assets/images/diesel9.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "FAQ" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com/QuikStopDiesel", icon: "fab fa-twitter" },
  {
    id: 2,
    href: "https://www.instagram.com/quikstopdieselbayarea/",
    icon: "fab fa-instagram",
  },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-truck",
    title: "Truck Repair",
    text: " Inspect, diagnose and repair brake systems, engines, electrical components, steering systems, transmissions and tires..",
  },
  {
    id: 2,
    icon: "fas fa-tools",
    title: "Trailer Repair",
    text: "Maintaining hubs and axles and adjusting or replacing them when required. Inspecting, servicing, and replacing trailer parts, including tires. Checking and repairing the brake, electrical, and hydraulic systems. Testing all systems and equipment for performance issues..",
  },
  {
    id: 3,
    icon: "fas fa-car",
    title: "Car Repair",
    text: "Perform basic care and maintenance, including changing oil, checking fluid levels, and rotating tires. Repair or replace worn parts, such as brake pads, wheel bearings, and sensors. Perform repairs to manufacturer and customer specifications..",
  },
];

export const tours = [
  {
    id: 1,
    img: diesel3,
    date: new Date().toLocaleDateString(),
    title: "Extensive Experience",
    text: "With years of experience in the industry, we have developed a deep understanding of diesel engines and their unique oil requirements. Our technicians  are highly skilled and possess comprehensive knowledge of various diesel engine models, allowing them to handle oil changes with precision and expertise..",
    location: "San Francisco, CA",
    days: "Experience",
    price: "TBD",
  },
  {
    id: 2,
    img: diesel4,
    date: new Date().toLocaleDateString(),
    title: "Specialization in Diesel Engines",
    text: " Unlike general automotive services, we specialize specifically in diesel engines. This specialization gives us an edge in providing tailored solutions for diesel vehicles. We stay updated on the latest advancements in diesel engine technology, ensuring that we are  equipped to handle the specific needs of your engine.",
    location: "Oakland, CA",
    days: "Specialization",
    price: "TBD",
  },
  {
    id: 3,
    img: diesel5,
    date: new Date().toLocaleDateString(),
    title: "Quality Products",
    text: " We believe in using only the highest quality products for  oil changes. We source premium oils and filters that are designed to meet the stringent requirements of diesel engines. By using top-notch materials, we ensure optimal performance and longevity for your engine, reducing the risk of premature wear and tear.",
    location: "San Mateo, CA",
    days: "Quality",
    price: "TBD",
  },
  {
    id: 4,
    img: diesel6,
    date: new Date().toLocaleDateString(),
    title: "Efficient Service",
    text: " We understand the importance of your time and strive to provide efficient and prompt service. Our streamlined processes and organized workflow enable us to complete oil changes in a timely manner, minimizing any inconvenience to you. We prioritize scheduling appointments and aim to have your vehicle back on the road as quickly as possible.",
    location: "San Jose, CA",
    days: "Efficient",
    price: "TBD",
  },
  {
    id: 5,
    img: diesel7,
    date: new Date().toLocaleDateString(),
    title: "Attention to Detail",
    text: "  When it comes to oil changes, we leave no room for error. Our technicians pay meticulous attention to detail, ensuring that every step of the process is executed accurately. From draining the old oil to replacing the filter and filling the engine with fresh oil, we follow industry best practices to maintain the highest standards of quality and reliability.",
    location: "Fremont, CA",
    days: "Detailed",
    price: "TBD",
  },
  {
    id: 6,
    img: diesel8,
    date: new Date().toLocaleDateString(),
    title: " Comprehensive Inspections",
    text: " Along with the oil change service, we perform comprehensive inspections of your diesel engine. We check for any potential issues or signs of wear that may require attention, allowing you to address problems proactively before they escalate into costly repairs. Our thorough approach ensures that your engine is in optimal condition after the oil change.",
    location: "Santa Rosa, CA",
    days: "Comprehensive",
    price: "TBD",
  },
];
