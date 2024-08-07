import Heading from "./../utilities/Heading";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full flex flex-col justify-center items-start gap-10"
    >
      <Heading>I&apos;m Specialized In</Heading>
      <div className="flex flex-wrap justify-evenly items-stretch gap-10">
        <ServiceCard
          color="custom-web-dev"
          title="Custom Website Development"
          desc="Tailored websites built to match your brand and meet your unique business needs, ensuring a seamless user experience."
        />
        <ServiceCard
          color="ux-ui-implementation"
          title="UI/UX Design Implementation"
          desc="Implementing cutting-edge UI/UX design principles to create user-friendly interfaces that enhance user interaction and satisfaction."
        />
        <ServiceCard
          color="spa"
          title="Single Page Applications (SPAs)"
          desc="Fast and responsive single-page applications designed for optimal performance and user engagement."
        />
        <ServiceCard
          color="pwa"
          title="Progressive Web Apps (PWAs)"
          desc="Reliable and fast web apps that work offline and provide a native app-like experience, enhancing user satisfaction."
        />
        <ServiceCard
          color="performance-optimization"
          title="Performance Optimization"
          desc="Enhancing website performance with faster load times and smoother interactions, providing a superior user experience."
        />
        <ServiceCard
          color="web-maintenance"
          title="Website Maintenance & Upgrades"
          desc="Regular updates and maintenance to keep your website running smoothly and up-to-date with the latest features and security standards."
        />
        <ServiceCard
          color="api-integration"
          title="API Integration"
          desc="Seamless integration of third-party APIs to extend your website’s functionality and improve data connectivity and user interactions."
        />
        <ServiceCard
          color="ecommerce"
          title="E-commerce Solutions"
          desc="Comprehensive e-commerce platforms with intuitive design, secure transactions, and easy navigation to boost online sales."
        />
      </div>
    </section>
  );
}
