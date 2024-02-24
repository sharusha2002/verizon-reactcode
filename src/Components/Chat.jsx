// import React from "react";
// import ChatBot from "react-simple-chatbot";

// const Chat = () => {
    
//   const categories = [
//             {
//                 category: "Account Management",
//                 questions: [
//                     "How do I sign up for a Jio account?",
//                     "How can I update my account information?",
//                     "How do I change my password?",
//                     "How do I recover my username/password?"
//                 ],
//                 answers: [
//                     "To sign up for a Jio account, you can visit our website or download the MyJio app and follow the on-screen instructions.",
//                     "You can update your account information by logging into your MyJio account and navigating to the 'Profile' or 'Account Settings' section.",
//                     "To change your password, log in to your MyJio account, go to 'Settings' or 'Account Security', and select the option to change your password.",
//                     "If you've forgotten your username or password, you can use the 'Forgot Password' or 'Forgot Username' option on the login page of MyJio app or website to recover it."
//                 ]
//             },
//             {
//                 category: "Billing and Payments",
//                 questions: [
//                     "How can I view my bill?",
//                     "How do I make a payment?",
//                     "Can I set up automatic payments?",
//                     "What are the accepted payment methods?"
//                 ],
//                 answers: [
//                     "You can view your bill by logging into your MyJio account and navigating to the 'Billing' or 'Payments' section.",
//                     "To make a payment, you can use the MyJio app, website, or visit a Jio store or authorized retailer.",
//                     "Yes, you can set up automatic payments by enabling the 'AutoPay' option in your MyJio account settings.",
//                     "We accept payments via credit/debit cards, net banking, UPI, and various mobile wallet apps."
//                 ]
//             },
//             {
//                 category: "Network",
//                 questions: [
//                     "How can I check network coverage in my area?",
//                     "What do I do if I'm experiencing network issues?",
//                     "How can I troubleshoot common network problems?"
//                 ],
//                 answers: [
//                     "You can check network coverage in your area by using the 'Network Coverage' feature on the MyJio app or website.",
//                     "If you're experiencing network issues, try restarting your device, checking for any network outage alerts, or contacting Jio customer support for assistance.",
//                     "To troubleshoot common network problems, you can try toggling airplane mode on and off, resetting network settings, or manually selecting the Jio network on your device."
//                 ]
//             },
//             {
//                 category: "Latest Offers",
//                 questions: [
//                     "Are there any current promotions or offers?",
//                     "How can I avail of a specific promotion?",
//                     "What are the terms and conditions of ongoing offers?"
//                 ],
//                 answers: [
//                     "Yes, we regularly offer promotions and special offers. You can view the latest offers on the MyJio app or website.",
//                     "To avail of a specific promotion, follow the instructions provided in the offer details on the MyJio app or website.",
//                     "The terms and conditions of ongoing offers can vary. You can find detailed terms and conditions for each offer on the MyJio app or website."
//                 ]
//             },
//             {
//                 category: "Recharge",
//                 questions: [
//                     "How do I recharge my Jio number?",
//                     "What are the available recharge plans?",
//                     "Can I recharge someone else's Jio number?"
//                 ],
//                 answers: [
//                     "You can recharge your Jio number using the MyJio app, website, or by visiting a Jio store or authorized retailer.",
//                     "We offer a variety of recharge plans to suit different needs. You can view and choose from the available plans on the MyJio app or website.",
//                     "Yes, you can recharge someone else's Jio number using the 'Recharge Others' feature on the MyJio app or website."
//                 ]
//             }
//         ];

//     // Generate steps dynamically based on categories
//     const steps = categories.flatMap(category => [
//         {
//             id: category.category,
//             message: `Here are some frequently asked questions about ${category.category}:`,
//             trigger: `${category.category}_Questions`
//         },
//         ...category.questions.map((question, index) => ({
//             id: `${category.category}_Questions_${index + 1}`,
//             message: question,
//             trigger: `${category.category}_Answers_${index + 1}`
//         })),
//         ...category.questions.map((_, index) => ({
//             id: `${category.category}_Answers_${index + 1}`,
//             component: (
//                 <div>
//                     <p>{category.answers[index]}</p>
//                     <p>Is there anything else I can assist you with?</p>
//                 </div>
//             ),
//             trigger: `${category.category}_Questions_${index + 2}` // Move to next question
//         }))
//     ]);

//     return (
//         <ChatBot
//             steps={[
//                 {
//                     id: '1',
//                     message: 'Welcome to our services. Please enter your name.',
//                     trigger: 'Ask Name',
//                 },
//                 {
//                     id: 'Ask Name',
//                     user: true,
//                     trigger: 'Account Management'
//                 },
//                 ...steps,
//                 {
//                     id: 'end-message',
//                     message: 'Thank you for visiting our website; we truly appreciate your interest and hope you found what you are looking for!',
//                     end: true,
//                 },
//             ]}
//             floating={true}
//         />
//     );
// };

// export default Chat;