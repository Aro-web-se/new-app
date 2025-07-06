import react from "react";
import { StatusBar } from "expo-status-bar";

import {
  InnerContainer,
  PageTitle,
  SubTitle1,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WlecomeImage,
  Avater,
  colors,
} from "../componants/styles";

// Colors
const { brand, darklight, primary, tertiary } = colors;

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WlecomeImage
          resizeMode="cover"
          source={require("./../assets/img/image6.png")}
        />

        <WelcomeContainer>
          <PageTitle Welcome={true}>Welcome! to Smart </PageTitle>
          <SubTitle1 Welcome={true}> Get Connected, Stay in Control</SubTitle1>
          <StyledFormArea>
            <Avater
              resizeMode="cover"
              source={require("./../assets/img/logo1.jpeg")}
            />
            <Line />
            <StyledButton
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <ButtonText> Logout </ButtonText>
            </StyledButton>
            <StyledButton
              onPress={() => {
                navigation.navigate("inapp");
              }}
            >
              <ButtonText> start </ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
