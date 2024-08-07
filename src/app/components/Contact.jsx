import Heading from "../utilities/Heading";
import Para from "../utilities/Para";
import Social from "../utilities/Social";
import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full grid md:grid-cols-2 grid-cols-1 justify-center items-start gap-5"
    >
      <div className="w-full flex flex-col justify-center items-start gap-7">
        <Heading>Let&apos;s Collaborate</Heading>
        <Para color="color-primary-blue" indent={true}>
          Ready to start your project? Let&apos;s talk about your ideas, needs,
          and expectations. I&apos;m here to help you make the most of our time
          together. Whether you&apos;re looking for a fresh new website, a
          powerful application, or seamless integration of modern technologies,
          I&apos;m excited to bring your vision to life. Fill out the form
          below, and let&apos;s create something amazing together!
        </Para>
        <Social />
      </div>
      <Form />
    </section>
  );
}
