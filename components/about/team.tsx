"use client";

import ImageWithFallback from "@/components/ui/image-with-fallback";
import { motion } from "framer-motion";

// Import your carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Annie Zeka",
      position: "Operations",
      image:
        "https://www.blueskydisposal.com/wp-content/themes/bluesky/images/Profile_Annie.png",
      description:
        "Ensures smooth operations and customer satisfaction across all services.",
    },
    {
      name: "Elvana Dedvukaj",
      position: "Operations",
      image:
        "https://www.blueskydisposal.com/wp-content/themes/bluesky/images/Profile_Elvana.png",
      description:
        "Leads strategic growth, client relations, and expansion efforts.",
    },
    {
      name: "Christina Antypas",
      position: "Operations",
      image:
        "https://www.blueskydisposal.com/wp-content/themes/bluesky/images/Profile_Christina.png",
      description:
        "Delivers exceptional customer experiences and service quality.",
    },
    {
      name: "Anton Dedvukaj",
      position: "Operations",
      image:
        "https://www.blueskydisposal.com/wp-content/themes/bluesky/images/Profile_Anton.png",
      description:
        "Coordinates efficient dispatch, routing, and field operations.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Meet Our Team
        </motion.h2>

        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Behind every successful service is a group of driven, passionate
          professionals who ensure customer satisfaction and operational
          excellence.
        </p>

        {/* Team Slider */}
        <Carousel className="w-full">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden text-center p-6"
                >
                  {/* Image */}
                  <div className="relative group">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-cover rounded-xl"
                    />
                  </div>

                  {/* Member Info */}
                  <h3 className="text-xl mt-4 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
