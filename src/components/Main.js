import React from "react";

const whiteCardsData = [
  {
    img:
      "https://thumb.tildacdn.com/tild3439-3364-4862-b964-643062306532/-/resize/30x/-/format/webp/photo.png",
    title: "Products for Startups",
    descr:
      "Burning Buttons helps you launch new game-changing products and avoid pitfalls: speed up development and gain advantages in early time-to-market within a fixed budget",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild3133-3334-4862-b732-393564613662/-/resize/30x/-/format/webp/photo.png",
    title: "Web Apps",
    descr:
      "We solve complicated challenges by building highly profitable applications on client-operated servers or using cloud-based services",
  },
];

const blackCardsData = [
  {
    img:
      "https://thumb.tildacdn.com/tild3535-3531-4464-a133-363064366436/-/resize/44x/-/format/webp/photo.png",
    title: "Business Analysis",
    descr:
      "We determine the functional and non-functional requirements of your product, interview the users and create a vision of your project",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild6333-3036-4737-a436-363264643534/-/resize/50x/-/format/webp/photo.png",
    title: "Design",
    descr:
      "We craft delightful user experiences for your digital products, solve real problems and improve your vital business metrics through beautiful interfaces",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild6331-6238-4736-b336-303138343061/-/resize/36x/-/format/webp/photo.png",
    title: "Backend",
    descr:
      "We build the server-side of your web application from scratch or pick up your work-in-progress. It includes creation of databases, integration with the third-party services and systems, implementation of the logic and calculations which are essential for the work of the program",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild3564-6439-4538-b531-393564363838/-/resize/40x/-/format/webp/photo.png",
    title: "Frontend",
    descr:
      "We build the user interface of your web or mobile application from scratch or pick up your work-in-progress. It includes building of the interface according to the created mockups, programming of the logic, implementation of the data transmission between server- and client-sides of the application",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild3034-6432-4338-b339-366630306139/-/resize/40x/-/format/webp/photo.png",
    title: "Quality Assurance",
    descr:
      "We assess the quality of the specifications and technical design documents and expose defects on every stage of the development process. We create and implement strategies for quality management and testing of your project",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild3366-3735-4637-a631-326133383263/-/resize/47x/-/format/webp/photo.png",
    title: "Project Management",
    descr:
      "We entirely manage your project. With this service purchased you not only get your dev-team managed and all the tasks resolved in time and within budget but also receive all the reports and documentation on the project",
  },
];

const testimonialsData = [
  {
    img:
      "https://thumb.tildacdn.com/tild3032-3630-4263-a236-663766306433/-/cover/100x100/center/center/-/format/webp/0_3.jpeg",
    name: "Richard Scales",
    position: "Delivery Manager at",
    link: "https://www.neilson.co.uk/",
    linkName: "Neilson Active Holidays",
    from: "United Kingdom",
    descr:
      "I'd be happy to recommended Burning Buttons for your project. They coped very well with the integration of a complex reservation booking system. We have an excellent working relationship with them and feel that they are an extension to our team here in the UK even though they are thousands of miles away in Russia.",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild3533-3735-4361-b630-616130636238/-/cover/100x100/center/center/-/format/webp/noroot.png",
    name: "Julian Phillips",
    position: "Founder & CEO of",
    link: "https://www.lovevolunteers.org/",
    linkName: "Love Volunteers",
    from: "Australia",
    descr:
      "The Burning Buttons team took part in the development of quite a large Drupal 8 project for us. Guys were very attentive and helpful all the way from the problem-solving stages through to delivery of high-quality code and provided well thought out solutions to our business cases. We are very happy with the results of our cooperation.",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild6434-3131-4234-a363-393239323266/-/cover/100x100/center/center/-/format/webp/0_5.jpeg",
    name: "Sofia Fominova",
    position: "Founder and CEO of",
    link: "https://mealz.com/",
    linkName: "Mealz",
    from: "United Kingdom",
    descr:
      "I have had a great experience with Burning Buttons. The communication with the team is smooth and it's easy to understand each other. The team is hardworking and often complete tasks in a very efficient manner.",
  },
  {
    img:
      "https://thumb.tildacdn.com/tild6563-6133-4539-a637-633764376461/-/cover/100x100/center/center/-/format/webp/slack-imgscom.jpg",
    name: "Darryl Thompson",
    position: "Assistant Director at",
    link: "https://www.egw.com/",
    linkName: "EGW",
    from: "United States of America",
    descr:
      "Very good cooperation. Easy communication and technically one of the most competent partners we work with. We will definitely keep them in mind for future work!",
  },
];

function WhiteCard({ card, i }) {
  return (
    <div
      className={
        "mb-6 px-4 py-6 bg-white rounded-md shadow-white-card sm:px-12 sm:h-48 sm:max-w-md sm:mx-auto sm:mb-10 lg:max-w-sm- lg:mx-0 lg:h-auto xl:max-w-md++  " +
        (i === 1 ? "lg:pl-7 lg:pr-6" : "lg:pl-7 lg:pr-7")
      }
    >
      <div className="flex items-center space-x-2 sm:space-x-6 lg:space-x-3">
        <img className="w-8 h-8" src={card.img} alt="whitecard-img" />
        <h3 className="font-bold text-xl- whitespace-no-wrap sm:text-2xl lg:text-xl- xl:text-2xl">
          <strong>{card.title}</strong>
        </h3>
      </div>
      <div className="mt-3 sm:mt-4">
        <p className="text-gray-600 text-xs+ font-medium sm:text-sm xl:text-lg">
          {card.descr}
        </p>
      </div>
    </div>
  );
}

function BlackCard({ card }) {
  return (
    <div className="mb-6 px-5 pt-6 pb-7 bg-nav-links rounded-md shadow sm:mb-0 sm:max-w-xs lg:h-72 xl:h-80 xl:px-8">
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-3">
        <img className="w-auto" src={card.img} alt="whitecard-img" />
        <h3 className="font-bold text-white  whitespace-no-wrap sm:text-xl- lg:text-lg sm:whitespace-pre-line">
          <strong>{card.title}</strong>
        </h3>
      </div>
      <div className="mt-4 xl:mt-6">
        <p className=" text-service-card text-sm font-medium lg:text-xs xl:text-sm">
          {card.descr}
        </p>
      </div>
    </div>
  );
}

function ArrowLeft({ card }) {
  return (
    <div className="testimonial-arrow-left flex-no-wrap w-64  px-5 py-5 bg-achievements sm:w-full sm:px-8 sm:pb-6">
      <div>
        <div className="font-bold text-sm">
          <strong>{card.name}</strong>
        </div>
        <div className="text-xs text-gray-600 sm:flex sm:space-x-1">
          <div>{card.position}</div>
          <a
            className="underline text-green-link font-semibold"
            href={card.link}
          >
            {card.linkName}
          </a>
          ,<div>{card.from}</div>
        </div>
      </div>

      <div className="mt-4 text-xs+ sm:text-sm">{card.descr}</div>
    </div>
  );
}

function Testimonials({ card, i }) {
  return (
    <div className="mb-8 -mx-8 flex space-x-5 sm:space-x-8 sm:mx-auto sm:max-w-2xl sm:px-8 lg:max-w-6xl xl:max-w-3xl++">
      <div className="flex-none sm:flex-auto ">
        <img
          className="w-15 h-15 sm:w-32 sm:h-24 sm:flex-auto"
          src={card.img}
          alt="testimonial"
        />
        {/* <div className="hidden sm:block sm:flex-1 sm:mt-16"></div> */}
      </div>

      <div className="sm:hidden">
        <ArrowLeft card={card} />
      </div>

      <div className="hidden sm:block testimonial-arrow-center-left flex-no-wrap w-64  px-5 py-5 bg-achievements sm:w-full sm:px-8 sm:pb-6 xl:px-5">
        <div>
          <div className="font-bold text-sm xl:text-lg">
            <strong>{card.name}</strong>
          </div>
          <div className="text-xs text-gray-600 sm:flex sm:space-x-1 xl:text-sm">
            <div>{card.position}</div>
            <a
              className="underline text-green-link font-semibold"
              href={card.link}
            >
              {card.linkName}
            </a>
            ,<div>{card.from}</div>
          </div>
        </div>

        <div className="mt-4 text-xs+ sm:text-sm sm:mt-2">{card.descr}</div>
      </div>
    </div>
  );
}

export const Main = () => {
  return (
    <main className="max-w-sm mx-auto px-12 mt-5 sm:max-w-full sm:mt-12">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-black text-nav-links sm:text-3xl xl:text-4xl">
            Your remote Jack of all <br className="sm:hidden" />
            IT trades
          </h2>
          <div className="mt-3 text-gray-600 font-medium text-xs+ sm:text-sm sm:max-w-xl sm:mx-auto lg:max-w-2xl xl:text-lg xl:max-w-3xl">
            Burning Buttons has been an incumbent player in the IT market for 10
            years. We work both with Start-Ups and advanced businesses sharing
            our expertise in such sectors as Travel, Booking, Non-profit
            organizations, and B2G
          </div>
        </div>
        <div className="mt-6 sm:mt-10 lg:flex lg:justify-center lg:space-x-5">
          {whiteCardsData.map((card, i) => {
            return <WhiteCard i={i} card={card} key={i} />;
          })}
        </div>
        <div className="-ml-2 mt-8 text-center lg:mt-5 xl:ml-0 xl:mt-10">
          <h2 className="text-xl font-black text-nav-links sm:text-3xl xl:text-4xl">
            Choose your own type
            <br className="sm:hidden" /> of Service
          </h2>
          <div className="mt-3 text-gray-600 font-medium text-xs+ sm:pl-6 sm:text-sm sm:max-w-xl sm:mx-auto lg:max-w-2xl xl:text-lg xl:max-w-2xl xl:pl-0">
            We do not work applying the same yardstick to everybody, that is why
            we allow our clients to decide what kind of services they need and
            <br className="hidden sm:block lg:hidden" /> define the scope of
            work to be done.
            <br className="lg:hidden" /> There's what we can do:
          </div>
        </div>
        {/* Service */}
        <div className="mt-4 -mx-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:mx-auto sm:px-12 lg:grid-cols-3 lg:gap-8 lg:px-4 xl:gap-5 xl:max-w-5xl xl:grid-rows-2">
          {blackCardsData.map((card, i) => {
            return <BlackCard card={card} key={i} />;
          })}
        </div>
        <div className="-mx-6 mt-15 text-center sm:mx-0 lg:mt-20 xl:mt-24 xl:max-w-xl xl:mx-auto">
          <h2 className="text-xl font-black text-nav-links sm:text-3xl xl:text-4xl">
            Testimonials of Our Clients
          </h2>
          <div className="px-6 max-w-xs mx-auto mt-2 text-gray-600 font-medium text-xs+ sm:px-2 sm:text-base sm:max-w-md++ sm:mx-auto lg:max-w-2xl xl:text-lg xl:mt-5 xl:max-w-2xl xl:pl-0 xl:mx-2">
            We are ensuring sustainable and long-term growth for our clients and
            our successful projects and customers' feedback are a good case in
            point
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          {testimonialsData.map((card, i) => {
            return <Testimonials card={card} key={i} />;
          })}
        </div>
        <div className="mt-8 -mx-6  sm:mt-12  lg:mt-16 xl:mt-32">
          <div className="py-7 pl-7 bg-nav-links text-white rounded-lg sm:flex sm:mx-auto sm:items-center sm:max-w-xl+ sm:space-x-4 lg:max-w-3xl+ lg:mx-auto lg:pb-10 lg:pt-10 xl:max-w-5xl xl:px-12 xl:pt-7">
            <div className="flex-1 sm:max-w-xs lg:max-w-none lg:pl-8">
              <div className=" pr-4 text-lg- font-bold sm:text-3xl+ sm:leading-10 lg:text-4xl">
                Do you have <br className="hidden sm:block lg:hidden" />a great
                idea?
              </div>
              <div className="mt-2  pr-2 text-xs+ font-medium sm:mt-4 sm:text-base lg:text-lg xl:mt-2">
                Let's discuss how to bring it to life
              </div>
            </div>
            <div className="pr-4 mt-7 mb-4 sm:flex-1 xl:mt-12 flex justify-center lg:flex-none lg:pr-12">
              <button
                className="px-4 py-3 leading-5 rounded-md text-sm uppercase tracking-wide font-semibold
              bg-white transition duration-200 text-nav-links hover:text-nav-links-hover sm:text-base sm:px-7 sm:leading-9 xl:text-lg xl:leading-9"
              >
                Leave Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
