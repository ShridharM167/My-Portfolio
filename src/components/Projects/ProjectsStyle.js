import styled from 'styled-components';
// import _default from '../../themes/default';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    // clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
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
    text-align: justify;
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
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 30px;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    align-items: center;
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