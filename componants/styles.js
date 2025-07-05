import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darklight: "#9CA3AF",
  brand: "#6D28D9",
  red: "#EF4444",
  green: "#32CD32",
  midnight: "#4682B4"
};

const { primary, secondary, tertiary, darklight, brand, red, green, midnight} = colors;

// Styled Components
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${primary};
  
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

//welcome page
export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 19px;
  justifi-content: center;
`;

export const PageLogo1 = styled.Image`
  width: 100px;
  height: 120px;
`;

export const PageLogo2 = styled.Image`
  width: 170px;
  height: 140px;
`;

//welcome page
export const Avater = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radious: 50px;
  border-width: 2px;
  border-color: ${primary};
  margin-bottom: 3px;
  margin-top: 3px;
`;

//wlcome image
export const WlecomeImage = styled.Image`
  height: 50%;
  min-width: 100px;
`;



export const PageTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 15px;



  ${(props) => props.Welcome && `
      font-size: 35px;
    `}
`;


export const SubTitle = styled.Text`
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};


  ${(props) => props.Welcome && `
      margin-bottom: 5px;
      font-weight: normal;
    `}
`;

//extra SubTitle
export const ExtraSubTitle = styled.Text`
  font-size: 11px;
  margin-top: 0px;
  margin-bottom: 0px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
  text-align: center;
  color: ${midnight};
  `;


export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin: 3px 0 10px 0;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: 38px;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 38px;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) => props.google == true &&`
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) => props.google == true &&`
      padding: 5px;
    `}
`;

export const MsBox = styled.Text`
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darklight};
  margin-vertical: 10px;
`;

export const Extraview = styled.View`
    justify-content: center;
    flex-direction: row;
    align-item: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-content: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;