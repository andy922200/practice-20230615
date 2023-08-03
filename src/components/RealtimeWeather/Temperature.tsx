import styled from "@emotion/styled"

const Temperature = styled.div`
  color: ${({ theme }) => theme.temperatureColor };;
  font-size: 96px;
  font-weight: 300;
  display: flex;
`;

export default Temperature