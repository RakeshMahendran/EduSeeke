import { Container } from 'postcss';
import React from 'react';
//import {CompanyLogo} from '../../assets/companylogo.svg'


const Footer = () => {
    const courses = [
      {
        courseName: "UI/UX Design",
        link: "",
      },
      {
        courseName: "Website Dev",
        link: "",
      },
      {
        courseName: "Business Strategy",
        link: "",
      },
      {
        courseName: "Software Dev",
        link: "",
      },
      {
        courseName: "Data Analyst",
        link: "",
      },
    ];

    const links = [
      {
        linkName: "About Us",
        linkOfLink: "",
      },
      {
        linkName: "Overview",
        linkOfLink: "",
      },
      {
        linkName: "Teachers",
        linkOfLink: "",
      },
      {
        linkName: "Join us",
        linkOfLink: "",
      },
      {
        linkName: "Our news",
        linkOfLink: "",
      },
    ];

    const contacts = [
      {
        contactType: "88 RS Puram,Coimbatore",
      },
      {
        contactType: "needhelp@eduseeke.com",
      },
      {
        contactType: "99399 99399",
      },
    ];

    const socialLinks = [
        
    ]
  return (
    <div className="flex justify-around text-white bg-[#181A21] py-5">
      <div>
        <div className="flex items-start justify-center">
          <div>
            {/* <img src={CompanyLogo} alt="EduSeeke" className="w-10 h-10" />  */}
          </div>
          <div className="mt-1 font-mono text-lg">EduSeeke</div>
        </div>
      </div>
      <div>
        <div className="mb-6 font-sans text-lg font-bold">Courses</div>
        {courses &&
          courses.map((course, index) => (
            <div key={index} className="mt-2">
              <div>{course?.courseName}</div>
            </div>
          ))}
      </div>
      <div>
        <div className="mb-6 font-sans text-lg font-bold">Links</div>
        {links &&
          links.map((link, index) => (
            <div key={index} className="mt-2">
              <div>{link?.linkName}</div>
            </div>
          ))}
      </div>
      <div>
        <div className="mb-6 font-sans text-lg font-bold">Contacts</div>
        {contacts &&
          contacts.map((contact, index) => (
            <div key={index} className="mt-2">
              <div>{contact?.contactType}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Footer