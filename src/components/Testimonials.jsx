import Image from "next/image";

import { Container } from "./Container";
import avatarImage1 from "../assets/avatars/avatar-1.png";
import avatarImage2 from "../assets/avatars/avatar-2.png";
import avatarImage3 from "../assets/avatars/avatar-3.png";
import avatarImage4 from "../assets/avatars/avatar-4.png";
import avatarImage5 from "../assets/avatars/avatar-5.png";

const testimonials = [
  [
    {
      content:
        "Using their blockchain-based land registration, we could effortlessly convert our physical land documents into immutable hash keys. It has brought a new level of security and transparency to our land management processes.",
      author: {
        name: "Sheryl Berge",
        role: "CEO at Lynch LLC",
        image: avatarImage1,
      },
    },
    {
      content:
        "The integration of blockchain technology into land registration has simplified our property transfer processes. With the ability to log in securely using our digital wallets, managing land records has become more efficient and secure.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "The feature allowing us to securely log in with our digital wallets has streamlined our access to land records. It has made the entire process more convenient and secure, ensuring that our land documents are readily accessible and secure.",
      author: {
        name: "Leland Kiehn",
        role: "Founder of Kiehn and Sons",
        image: avatarImage5,
      },
    },
    {
      content:
        "Blockchain-based land registration has significantly improved our land record management. We can now ensure the authenticity and security of our land documents, bringing a new level of trust and efficiency to our operations.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        "The implementation of blockchain technology in land registration has simplified our processes, ensuring the security and authenticity of our land records. It has significantly reduced the risk of disputes and fraudulent claims, enhancing our overall operational efficiency.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image: avatarImage3,
      },
    },
    {
      content:
        "With the blockchain-based land registration system, we have experienced a new level of transparency and security in managing our land records. It has provided us with a streamlined process for accessing and verifying our land documents, ensuring their authenticity and integrity.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatarImage4,
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="bg-emerald-500 relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      {/* <QuoteIcon className="absolute left-6 top-6 fill-slate-100" /> */}
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-green-700">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
