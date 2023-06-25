import { Container } from '@mui/material';
import React from 'react';
import CompanyLogo from '../../assets/companylogo.svg'
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

const LogoBar = () => {
  return (
    <Container>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-start justify-center">
          <div>
            <img src={CompanyLogo} alt="EduSeeke" className="w-10 h-10" />
          </div>
          <div className="mt-1 font-mono text-lg">EduSeeke</div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <PhoneInTalkIcon sx={{ color: "#4D5FE3" }} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm font-thin">Call Agent</div>
            <div className="ml-2 text-sm">99399 99399</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <EmailIcon sx={{ color: "#4D5FE3" }} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm font-thin">Call Agent</div>
            <div className="ml-2 text-sm">needhelp@eduseeke.com</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LogoBar