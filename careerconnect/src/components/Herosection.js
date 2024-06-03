// // import React from 'react';
// // import '../stylesheet/HeroSection.css';
// // import FirstImage from '../images/student1.jpg'
// // import SecondImage from '../images/student2.jpg'
// // import ThirdImage from '../images/student3.jpg'

// // const HeroSection = () => {
// //   return (
// //     <section className="hero">
// //       <div className="hero-content">
// //       <h1>CareerConnect: Revolutionizing the Campus Hiring Process.</h1>
// //         <p>CareerConnect is a Platform for Colleges, Universities & Students, Focused on Revolutionizing the Campus Hiring Process.</p>
// //         <div className="cta-buttons">
// //           <a href="#features" className="cta-button">I am a Student</a>
// //           <a href="#features" className="cta-button">We are CRD</a>
// //           <a href="#features" className="cta-button">We are Hiring</a>
// //         </div>
// //       </div>
// //       <div className="hero-images">
// //         <img src={FirstImage} alt="Student 1" className="hero-img" />
// //         <img src={SecondImage} alt="Student 2" className="hero-img" />
// //         <img src={ThirdImage} alt="Student 3" className="hero-img" />
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from 'react';
// import '../stylesheet/HeroSection.css';
// import FirstImage from '../images/student1.jpg';
// import SecondImage from '../images/student2.jpg';
// import ThirdImage from '../images/student3.jpg';

// const HeroSection = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>CareerConnect: Revolutionizing the Campus Hiring Process.</h1>
//         <p>CareerConnect is a Platform for Colleges, Universities & Students, Focused on Revolutionizing the Campus Hiring Process.</p>
//         <div className="cta-buttons">
//           <a href="#features" className="cta-button">I am a Student</a>
//           <a href="#features" className="cta-button">We are CRD</a>
//           <a href="#features" className="cta-button">We are Hiring</a>
//         </div>
//       </div>
//       <div className="hero-images">
//         <img src={FirstImage} alt="Student 1" className="hero-img" />
//         <img src={SecondImage} alt="Student 2" className="hero-img" />
//         <img src={ThirdImage} alt="Student 3" className="hero-img" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from 'react';
import '../stylesheet/HeroSection.css';
import FirstImage from '../images/student1.jpg';
import SecondImage from '../images/student2.jpg';
import ThirdImage from '../images/student3.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>CareerConnect: Revolutionizing the Campus Hiring Process.</h1>
        <p>CareerConnect is a Platform for Colleges, Universities & Students, Focused on Revolutionizing the Campus Hiring Process.</p>
        <div className="cta-buttons">
          <a href="#features" className="cta-button">I am a Student</a>
          <a href="#features" className="cta-button">We are CRD</a>
          <a href="#features" className="cta-button">We are Hiring</a>
        </div>
      </div>
      <div className="hero-images">
        <img src={FirstImage} alt="Student 1" className="hero-img" />
        <img src={SecondImage} alt="Student 2" className="hero-img" />
        <img src={ThirdImage} alt="Student 3" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;
