import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem 1.5rem 2rem;
  background-color: var(--elements-bg);
  border-radius: 0.6rem;
`;

export const Logo = styled.span`
  position: absolute;
  top: 0;
  left: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  transform: translateY(-50%);
  background-image: ${(props) => `url('${props.companyLogo}')`};
  background-size: 90%;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: ${(props) =>
    props.companyLogo === null ? "salmon" : "white"};
`;

export const GeneralInfos = styled.p`
  color: var(--text);
`;

export const JobTitle = styled.h3`
  margin: 0;
  color: var(--h3-color);
`;

export const Tags = styled.p`
  color: var(--tags);
  font-size: 1.4rem;
  font-weight: bold;
`;

const OfferCard = ({
  id,
  type,
  title,
  company,
  location,
  companyLogo,
  createdAt,
}) => (
  <CardContainer>
    <StyledLink to={`/details/${id}`}>
      <Logo companyLogo={companyLogo} />
      <GeneralInfos>
        {createdAt}d ago • {type}
      </GeneralInfos>
      <JobTitle>{title}</JobTitle>
      <GeneralInfos>
        {company.length > 30 ? company.slice(0, 30) + "..." : company}
      </GeneralInfos>
      <Tags>{location}</Tags>
    </StyledLink>
  </CardContainer>
);

export default OfferCard;
