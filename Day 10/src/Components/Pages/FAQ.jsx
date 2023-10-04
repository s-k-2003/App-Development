import React, { useEffect, useState } from "react";
import '../../Asserts/FAQ.css';
import Footer from "./Footer";

const FAQ=()=>{
    const [activeAnswers, setActiveAnswers] = useState(Array(10).fill(false));

    const handleQuestionClick = (index) => {
        setActiveAnswers(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const faqData = [
        {
            question: ' What are your restaurant hours?',
            answer: 'We are open from 11:00 AM to 10:00 PM, seven days a week.',
          },
          {
            question: 'Do you offer vegetarian options?',
            answer: 'Yes, we have a wide selection of delicious vegetarian dishes on our menu.',
          },
          {
            question: 'Can I make a reservation?',
            answer: 'Certainly! You can make a reservation by calling us at (123) 456-7890 or using our online reservation system.',
          },
          {
            question: 'Is there parking available?',
            answer: 'Yes, we have ample parking space available for our customers.',
          },
          {
            question: 'Do you offer delivery services?',
            answer: 'Yes, we offer both delivery and takeout services. You can place your order online or by phone.',
          },
          {
            question: 'Are there gluten-free options on the menu?',
            answer: 'Of course! We have a selection of gluten-free dishes to accommodate your dietary preferences.',
          },
          {
            question: 'Do you have a kids\' menu?',
            answer: 'Yes, we have a special menu for kids with a variety of kid-friendly options.',
          },
          {
            question: 'Can I bring my own wine?',
            answer: 'We offer a fine selection of wines, but you are also welcome to bring your own wine for a corkage fee.',
          },
          {
            question: 'How can I provide feedback about my experience?',
            answer: 'We value your feedback! You can leave a review on our website or speak to our staff during your visit.',
          },
          {
            question: 'Do you host private events and parties?',
            answer: 'Yes, we offer private event and party hosting. Please contact us for more information and reservations.',
          },
    ];

    return(
        <>
            <main>
                <section className="faq-banner">
                    <h1>FAQ</h1>
                    <p>Do you need an answer? Search Here!</p>
                </section>
                <section className="faq-questions-answers">
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <div className={`question question${index}`} onClick={() => handleQuestionClick(index)}>
                                 <p>✅</p>{item.question}
                                <span>{activeAnswers[index] ? "-" : "+"}</span>
                            </div>
                            <div className={`answer answer${index} ${activeAnswers[index] ? 'active' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default FAQ;
