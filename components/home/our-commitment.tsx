"use client";


export default function CommitmentSection() {
  return (
    <>
      {/* Our Commitment Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">Our Commitment to Michigan</h2>
          <div className="w-24 h-1.5 bg-[#008CBA] mx-auto rounded-full mb-8" />

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            As a 100% Michigan-owned and operated company, we understand the
            unique needs of our community. Every dumpster rental, every service
            call, and every customer interaction reflects our dedication to
            supporting local businesses and families.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We pride ourselves on being more than just a waste disposal
            service—we're your neighbors, committed to keeping Michigan clean,
            green, and thriving. Our local roots mean faster response times,
            personalized service, and a genuine understanding of what matters
            most to our community.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            When you choose Blue Sky Disposal, you're not just getting
            exceptional service—you're investing in Michigan's economy and
            supporting a women-led business that gives back to the community we
            all call home.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Ready to Experience the Blue Sky Difference?
          </h2>

          <p className="text-xl mb-8">
            Join hundreds of satisfied customers who trust us with their waste
            management needs.
          </p>

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  );
}
