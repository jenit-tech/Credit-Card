// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  SectionContainer,
  TitleText,
  CardWrapper,
  CardNumber,
  Label,
  UserName,
  InputContainer,
  InputTitle,
  InputWrapper,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <AppContainer>
      <SectionContainer>
        <TitleText>CREDIT CARD</TitleText>
        <CardWrapper data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <Label>CARDHOLDER NAME</Label>
          <UserName>{cardName}</UserName>
        </CardWrapper>
      </SectionContainer>
      <InputContainer>
        <InputWrapper>
          <InputTitle>Payment Method</InputTitle>
          <Input
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeCardName}
          />
        </InputWrapper>
      </InputContainer>
    </AppContainer>
  )
}

export default CreditCard
