import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { AnimatedSection } from '../../common/AnimatedSection';
import { FormField } from '../../common/FormField';
import { SectionHeading } from '../../common/SectionHeading';

interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactFormData>();

  const onSubmit = (data: IContactFormData) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    );

    window.open(
      `mailto:israfilguseinov98@gmail.com?subject=${subject}&body=${body}`,
      '_self',
    );

    reset();
  };

  return (
    <AnimatedSection className="px-6 py-24" id="contact">
      <div className="mx-auto max-w-xl">
        <SectionHeading
          title="Contact"
          subtitle="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible."
        />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            label="Name"
            id="name"
            register={register('name', { required: 'Name is required' })}
            error={errors.name?.message}
            placeholder="Your name"
          />

          <FormField
            label="Email"
            id="email"
            type="email"
            register={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            error={errors.email?.message}
            placeholder="your@email.com"
          />

          <FormField
            label="Message"
            id="message"
            textarea
            register={register('message', {
              required: 'Message is required',
            })}
            error={errors.message?.message}
            placeholder="Tell me about your project..."
          />

          <button
            type="submit"
            className="bg-emerald-glow hover:shadow-emerald-glow/25 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-gray-950 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send Message
            <Send size={18} />
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
