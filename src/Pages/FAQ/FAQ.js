import React from "react";
import styled from "styled-components";

const faqs = [
  {
    title: "WHAT IS CHUMZ",
    faqs: [
      {
        question: "What is chumz ?",
        answers: [
          "Chumz is a mobile based saving application that provides the best user experience and guidance to help you achieve your goals",
        ],
      },
      {
        question: "Why should I use chumz  ?",
        answers: [
          "Chumz helps  you to easily turn your intent to save to action ",
          "Chumz makes saving fun and engaging through gamification",
          "Chumz has  intelligent alert model to encourage saving from mobile money",
          "Chumz  enables you to save as low as ksh 5 ",
        ],
      },
      {
        question: "How do I get started ?",
        answers: [
          "Download  chumz app  from playstore using the  link below",
          "https://bit.ly/ChumzApp",
          "Create an account and start saving ",
        ],
      },
      {
        question: "How much can I save  ?",
        answers: [
          "You can save as  low as ksh 5",
          "We don't have an upper limit on the amount you can save ",
        ],
      },

      ,
    ],
  },
  {
    title: "SAFETY AND SECURITY",
    faqs: [
      {
        question: "How secure is my personal information ?",
        answers: [
          "Information collected is a kyc requirement by regulator",
          "-Your personal information is encrypted using bank-level encryption both in transit and in stored ",
          "-Your personal info is not shared with  any third party  ",
        ],
      },
      {
        question: "Does chumz have an office ?",
        answers: [
          "Yes, We are located on the 3rd floor, Police Sacco Plaza (Ngara road, Nairobi).",
        ],
      },
      {
        question: "How secure is my money ?",
        answers: [
          "All the money saved through Chumz is  held in a trust account by our  partner bank",
          "Our partner bank is regulated by the Central Bank of Kenya (CBK)  ",
        ],
      },
    ],
  },
  {
    title: "CHUMZ SAVING PLANS",
    faqs: [
      {
        question: "What is quick save and how does it work ?",
        answers: [
          "Quick save is a saving account that you set aside funds that you want to save but don’t yet have a goal in mind",
          "You can’t directly withdraw funds from quicksave. You can only move funds in quick save to a saving plan",
        ],
      },
      {
        question: "What savings plans are available on chumz ?",
        answers: [
          "We have most of the savings plans on  pre set, so you can easily select one when creating a goal.",
          "However if you have a goal that's not in the preset plans you can create a custom plan ",
          "Some of already preset plans include :-",
          "52 weeks challenge     Rent                 Insurance          Education          Business ",
          "Emergency              Clear debt           Eat out            Furniture          House",
          "Kitchen Ware           Electronics          Life event         Movies             Shoes",
          "Shopping               Land                 Tech Gadgets       Travel             Vacation",
        ],
      },
      {
        question: "How many savings plans can I have ?",
        answers: [
          "There is no limit to the number of plans that you can create .",
          "Chumz seeks to empower you achieve as much as possible",
        ],
      },
      {
        question: "Can I monitor my  savings?",
        answers: [
          "Chumz is designed with monitoring in mind. ",
          "There is a progress bar on your savings goals of your saving against your target goal amount",
          "You can also go to  profile and click on the “View Details” button to see all your saving history",
        ],
      },
      {
        question: "Does my money earn interest?",
        answers: ["Money saved in locked savings account earns interest"],
      },
    ],
  },
  {
    title: "CHUMZ GROUP SAVING",
    faqs: [
      {
        question: "What is chumz group savings?",
        answers: [
          "Chumz group saving is a saving feature designed and optimized for group savings ",
          "You simply create a group and invite other members  and you start saving",
        ],
      },
      {
        question: "How many people can a group have ?",
        answers: [
          "A saving group can have a minimum of 2 members and a maximum of 100 members",
        ],
      },
      {
        question: "How many groups can I create ?",
        answers: ["There is no limit to the number of savings you can create"],
      },
      {
        question: "How many goals can I have per group ?",
        answers: [
          "There is no limit to the number of goals per goal ",
          "We however recommend you keep them at a minimum",
        ],
      },
      {
        question: "How do group withdrawals work ?",
        answers: [
          "Group admin initiates a withdrawal request",
          "Each group member receives the withdrawal request and approves or rejects  the withdrawal ",
          "Once everyone approves, withdrawal button appears on admin for withdrawal ",
        ],
      },
      {
        question: "What is a group chat feature ?",
        answers: [
          "Group chat is a feature that enable groups member easily communicate with each other through chat messaging ",
        ],
      },
    ],
  },
  {
    title: "WITHDRAWALS",
    faqs: [
      {
        question: "When can I withdraw my funds? ",
        answers: ["You can withdraw money  from your goals at any time "],
      },
      {
        question: "How do I withdraw ?",
        answers: [
          "Tap on a goal ",
          "Click on view more details",
          "Click on  withdraw icon ",
          "Withdrawal partial or the full amount for that  goal",
          "You will get the funds in your M-pesa in less than 10 minutes",
        ],
      },
    ],
  },
  {
    title: "FEES",
    faqs: [
      {
        question: "How much does it cost ?",
        answers: [
          "Chumz is free to use.",
          "no monthly charge, no maintenance cost, no nothing",
        ],
      },
    ],
  },
  {
    title: "TEAM",
    faqs: [
      {
        question: "Who is behind chumz ?",
        answers: [
          "Our team is made up of people from diverse professional fields and academic fields.",
          "From computer science, Finance, Actuarial science  and partners who have business reach in several African countries.",
          "Read more here https://chumz.io/#/about",
        ],
      },
    ],
  },
  {
    title: "MORE QUESTIONS ",
    faqs: [
      {
        question: "",
        answers: ["If you have more question email us info@moneto.co.ke "],
      },
    ],
  },
];

const FAQField = styled.div`
  padding: 10px 0px;
`;

const SectionTitle = styled.h2`
  font-family: Cera-Bold;
  text-decoration: underline;
`;
export default function componentName() {
  return (
    <div className="fdb-block">
      <div>
        <div className="container">
          <div className="text-left justify-content-left">
            {faqs.map((section, index) => (
              <FAQField className="">
                <SectionTitle>{section.title}</SectionTitle>
                {section.faqs.map((faq, faqIndex) => (
                  <FAQField>
                    <h3>{faq.question}</h3>
                    {faq.answers.map((answer, answerIndex) => (
                      <p>{answer}</p>
                    ))}
                  </FAQField>
                ))}
              </FAQField>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
