import Google from '../assets/playstore.png'
import AppleStore from '../assets/applestore.png'
import Mockup from '../assets/mockup.png'
// import Nav from '../components/Navigation'
import styled from 'styled-components'
import Transaction from '../assets/transaction.png'
import {BsForward} from 'react-icons/bs'
import More from '../assets/getmore.png'
// import Footer from '../components/Footer'

const Landing = () => {
  return (
    <LastDiv>
    <GlobalWrapper>
      {/* <Nav /> */}
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
        <Extra>
        <TranTextBold>
        Enjoy Fast And Reliable Payments
        </TranTextBold>
        <TranText>
        It's fast and free to send money to any PalmPay user or Nigerian bank account. And you can be assured of the reliability of our platform - 99% of our customers have voted us as the most reliable payment platform in Nigeria. .
        </TranText>
        <Hyper>
        Learn more <BsForward />
        </Hyper>
        </Extra>
      </PayText>
    </Payment>


    <GetMore>
      <GetText>
        <GetTextWrap>
          <GetTextBold>Get More For Your Money</GetTextBold>
          <GetTextNorm>Goodbye charges, hello rewards! With PalmPay you save on fees and earn as you spend through discounts and cashback. Get the app now and make your money go further.</GetTextNorm>

         
        </GetTextWrap>
      </GetText>
      <GetImage>
            <img src={More} alt="" />
      </GetImage>
    </GetMore>


    
    </GlobalWrapper>
    {/* <Footer /> */}
    </LastDiv>
  )
}
export default Landing
//Third screen styles

const GetMore = styled.div`
display: flex;
height: 90vh;
@media (max-width: 768px){
  flex-direction: column;
  text-align: center;
}
`
const GetText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
@media (max-width: 768px){
  align-items: center;
  justify-content: center;
}
`
const GetTextWrap = styled.div`
  
  margin: auto;
  @media (max-width: 768px){
    width: 100%;
  }
`
const GetTextBold = styled.h2`
font-size: 3rem;
line-height: 1;
font-weight: 600;
width: 100%;
line-height: 1.2;
@media (max-width: 768px){
  width: 90%;
  margin: auto;
}
@media (max-width: 425px){
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5;
}
`
const GetTextNorm = styled.p`
width: 100%;
margin: 25px 0;
line-height: 2;
@media (max-width: 768px){
  width: 100%;
}
`

const GetImage = styled.div`
display: flex;
flex: 1;
justify-content: center;

`



// Second screen styles
const Payment = styled.div`
display: flex;
padding: 10px 0;
height: 90vh; 
@media (max-width: 768px){
  flex-direction: column;
  text-align: center;
}
`
const TranTextBold = styled.h1`
font-size: 3rem;
line-height: 1;
font-weight: 600;
width: 100%;
line-height: 1.2;
@media (max-width: 768px){
  width: 90%;
  margin: auto;
}
@media (max-width: 425px){
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5;
}
`
const TranText = styled.p`
width: 100%;
margin: 25px 0;
line-height: 2;
@media (max-width: 768px){
  width: 100%;
}
`
const Hyper = styled.a`
display: flex;
align-items: center;
gap: 7px;
width: 100%;
color: #6307b2;
align-items: center;
@media (max-width: 768px){
  display: flex;
  justify-content: center;
}
`
const ImgContainer = styled.div`
display: flex;
flex: 1;
`
const Extra = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 768px){
    width: 100%;
  }
`
const PayText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex: 1;
@media (max-width: 768px){
  align-items: center;
  justify-content: center;
}
`

// First screen styles
const GlobalWrapper = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 768px){
    width: 95%;
  }
`
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px){
    width: 90%;
    flex-direction: column;
    gap: 15px;
    margin: auto;
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
  @media (max-width: 425px){
    font-size: 1.8rem;
  }
`
const Span = styled.span`
font-weight: 600;
`
const NormText = styled.p`
  margin-top: 25px;
  margin-bottom: 25px;
  width: 85%;
  font-weight: 400;
  @media (max-width: 768px){
    margin:25px auto;
    width: 100%;
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
    width: 100%;
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
const LastDiv = styled.div``