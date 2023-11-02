import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 60px 20px;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        margin-bottom: 0px;
    }

`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    gap: 12px;
    
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #5f6368;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0px 20px;
    }
`;


export const CardContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    gap: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    grid-auto-rows: minmax(100px, auto);    
    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;