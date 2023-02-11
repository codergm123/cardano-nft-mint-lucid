import { useState } from 'react';

interface Accordion {
  faq: any;
  index : any;
  toggleFAQ : any;
}


const Accordions = () => {
  const [ faqs, setFaqs ] = useState([
    {
      title: "What is your first question?",
      content: "You can see what you want here.",
      open: false,
    },
    {
      title: "What is your second question?",
      content: "You can see what you want here.",
      open: false,
    },
    {
      title: "What is your third question?",
      content: "You can see what you want here.",
      open: false,
    },
    {
      title: "What is your 4th question?",
      content: "You can see what you want here.",
      open: false,
    },
    {
      title: "What is your 5th question?",
      content: "You can see what you want here.",
      open: false,
    },
  ])

  const toggleFAQ = (index:any) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
 
  return (
    
    <div className="w-full z-10 space-y-5 text-green text-left w-full">
      <div className="faqs md:px-10 w-full text-left font-bold">
        {
          faqs.map((faq, index) => 
            <FAQs faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          )
        }
      </div>

    </div>
  );
}

const FAQs = ({ faq, index, toggleFAQ }: Accordion) => {
  return (
    <div
      className={"faq faq-border px-6 py-5 " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-xl font-bold">
        {faq.title}
      </div>
      <div className="faq-answer border-top">
        <p className="pt-6">
          {faq.content}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className='w-full'>
      <div className="flex flex-col mb-16 mt-44 mx-auto font-benji">
        <p className="text-center text-gray-400 font-logo  uppercase mb-4 tracking-widest">
          can pokers fly?
        </p>
        <h1 className="text-center font-logo text-white text-5xl font-bold uppercase">
          frequently asked questions
        </h1>
      </div>
      
      <Accordions />
    </div>
  )
}

export default Faq;