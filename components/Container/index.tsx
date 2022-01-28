import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.theme.container.lg};
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pd(3)};
`;

export default Container;
