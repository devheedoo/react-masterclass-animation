import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
