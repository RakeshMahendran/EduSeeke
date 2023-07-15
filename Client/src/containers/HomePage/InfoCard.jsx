import { Container } from '@mui/material'
import React from 'react'
import  LogoExample from '../../assets/companylogo.svg'
import { info } from 'autoprefixer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const InfoCard = () => {

    const infoCardDetails = [
      {
        infoCardName: "Learn Skills",
        infoCardDesc: "with unlimited courses",
        infoLogo: <VerifiedUserIcon/>,
      },
      {
        infoCardName: "Free resources",
        infoCardDesc: "from various domains",
        infoLogo: <LibraryBooksIcon/>,
      },
      {
        infoCardName: "Certificates",
        infoCardDesc: "value all over the world",
        infoLogo: <VerifiedUserIcon/>,
      },
    ]; 

  return (
    <Container>
      <div className="flex justify-between p-2 ">
        {infoCardDetails &&
          infoCardDetails.map((item,index) => (
            <div key={index}>
              <div>
                {item.infoLogo}
              </div>
              <div className="flex flex-col items-start justify-center p-4 bg-white rounded-md shadow-lg hover:border hover:border-b-8 hover:border-primary">
                <div className="font-sans font-bold">{item?.infoCardName}</div>
                <div className="font-sans font-light">{item?.infoCardDesc}</div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default InfoCard