import Google from '../assets/playstore.png'
import AppleStore from '../assets/applestore.png'
import Mockup from '../assets/mockup.png'
import Nav from '../components/Navigation'
import styled from 'styled-components'
import Transaction from '../assets/transaction.png'
import {BsForward} from 'react-icons/bs'

const Landing = () => {
  return (
    <GlobalWrapper>
      <Nav />
    <Wrapper>
      <Desc>
        <BoldText>
          Digital <Span>Finance</Span> That <Span>Fits Your Life</Span>
        </BoldText>

        <NormText>
        An intuitive digital wallet with account opening, money transfer and bill payments in one. Earn as you spend.
        </NormText>

        <Stores>
          <Contain><img src={Google} alt="" /></Contain>
          <Contain><img src={AppleStore} alt="" /></Contain>
        </Stores>
      </Desc>
      <ImgDesc>
        <DescContain>
          <img src={Mockup} alt="" />
        </DescContain>
      </ImgDesc>
    </Wrapper>




    <Payment>
      <ImgContainer>
      <img src={Transaction} alt="" />
      </ImgContainer>

      <PayText>
        <TranTextBold>
        Enjoy Fast And Reliable Payments
        </TranTextBold>
        <TranText>
        It's fast and free to send money to any PalmPay user or Nigerian bank account. And you can be assured of the reliability of our platform - 99% of our customers have voted us as the most reliable payment platform in Nigeria. .
        </TranText>
        <Hyper>
        Learn more <BsForward />
        </Hyper>
      </PayText>
    </Payment>
    </GlobalWrapper>

  )
}
export default Landing
const Payment = styled.div`
display: flex;
justify-content: center;
padding: 30px 0;
@media (max-width: 768px){
  flex-direction: column;
  text-align: center;
}
`
const TranTextBold = styled.h1`
font-size: 2.5rem;
line-height: 1;
font-weight: 600;
width: 80%;
@media (max-width: 768px){
  width: 90%;
  margin: auto;
}
`
const TranText = styled.p`
width: 80%;
margin: 30px 0;
@media (max-width: 768px){
  margin: 30px auto;
  width: 90%;
}
`
const Hyper = styled.a`
display: flex;
align-items: center;
gap: 7px;
width: 80%;
color: #6307b2;
@media (max-width: 768px){
  margin: auto;
}
`
const ImgContainer = styled.div`
display: flex;
flex: 1;
`
const PayText = styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin: 0 auto;
`

const GlobalWrapper = styled.div`
  width: 80%;
  margin: auto;
`
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px){
    width: 90%;
    flex-direction: column;
    gap: 15px;
  }
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  margin: auto;
  @media (max-width: 768px){
    width: 100%;
    flex: 1;
  }
`
const BoldText = styled.h2`
  font-size: 2.5rem;
  width: 70%;
  @media (max-width: 768px){
    text-align: center;
    width: 100%;
  }
`
const Span = styled.span`
font-weight: 500;
`
const NormText = styled.p`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 85%;
  @media (max-width: 768px){
    margin: 25px auto;
    text-align: center;
  }
`
const Stores = styled.div`
  width: 75%;
  height: 50%;
  display: flex;
  gap: 30px;
  @media (max-width: 768px){
    margin: auto;
  }
`
const Contain = styled.div`
  width: 100%;
  height: 100%;
`





const ImgDesc = styled.div`
display: flex;
flex: 1;
@media (max-width: 768px){
    width: 100%;
    flex: 1;
  }
`
const DescContain = styled.div`
  padding: 10px 0;
`