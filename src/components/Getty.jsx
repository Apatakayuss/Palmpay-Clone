import Button from './GlobalButton'
import More from '../assets/getmore.png'

const Getty = () => {
  return (
    <GetMore>
      <GetText>
        <GetTextWrap>
          <GetTextBold>Get More For Your Money</GetTextBold>
          <GetTextNorm>Goodbye charges, hello rewards! With PalmPay you save on fees and earn as you spend through discounts and cashback. Get the app now and make your money go further.</GetTextNorm>

         <Button>
            Get Palmpay
         </Button>
        </GetTextWrap>
      </GetText>
      <GetImage>
            <img src={More} alt="" />
      </GetImage>
    </GetMore>

  )
}

export default Getty
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