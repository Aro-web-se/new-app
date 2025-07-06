import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Formik
import { Formik } from "formik";

// Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo1,
  PageLogo2,
  PageTitle,
  SubTitle1,
  SubTitle2,
  ExtraSubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  colors,
  RightIcon,
  StyledButton,
  ButtonText,
  MsBox,
  Line,
  Extraview,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../componants/styles";

import { View } from "react-native";

// Colors
const { brand, darklight, primary } = colors;

//Keybord Avoiding View
import KeyboardAvoidingWrapper from "./../componants/KeybordAvoidingWrapper";
// import Welcome from "Welcome";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <PageLogo1
              resizeMode="cover"
              source={require("./../assets/img/logo1.jpeg")}
            />

            <PageLogo2
              resizeMode="cover"
              source={require("./../assets/img/image9.jpeg")}
            />
          </View>

          <PageTitle>
            Smart and Effective IoT and GNSS Technology based Tea farming and
            Tourism for Tea Community Development
          </PageTitle>
          <ExtraSubTitle>
            A CSR activity of Higher Education Financial Agency (HEFA)
          </ExtraSubTitle>
          <SubTitle2>Implemented by NIT Jamshedpur </SubTitle2>
          <SubTitle1>Account Login</SubTitle1>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);

              navigation.navigate("Welcome");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="*********@gmail.com"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsBox>...</MsBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText> Login </ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google={true}> sign in with Google </ButtonText>
                </StyledButton>
                <Extraview>
                  <ExtraText> Don't have an account already? </ExtraText>
                  <TextLink onPress={() => navigation.navigate("Signup")}>
                    <TextLinkContent> Signup </TextLinkContent>
                  </TextLink>
                </Extraview>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "eye-off" : "eye"}
            size={30}
            color={darklight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
