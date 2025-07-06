import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

// Formik
import { Formik } from "formik";

// Icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle1,
  SubTitle2,
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

import { View, TouchableOpacity } from "react-native";

// Colors
const { brand, darklight, primary } = colors;

//Keybord Avoiding View
import KeyboardAvoidingWrapper from "./../componants/KeybordAvoidingWrapper";

// dateTime
import DateTimePicker from "@react-native-community/datetimepicker";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setshow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // Actual date of birth
  const [dob, setdob] = useState();

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;
    setshow(false);
    setDate(currentDate);
    setdob(currentDate);
  };

  const showDatePicker = () => {
    setshow(true);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle2>Implemented by NIT Jamshedpur </SubTitle2>
          <SubTitle1>1Account Signup</SubTitle1>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              dateOfBirth: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);

              navigation.navigate("Login");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="Your name"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />

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
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="YYYY - MM - DD"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  value={dob ? dob.toDateString() : ""}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
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
                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange("confirmpassword")}
                  onBlur={handleBlur("confirmpassword")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <MsBox>...</MsBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText> Signup </ButtonText>
                </StyledButton>
                <Line />

                <Extraview>
                  <ExtraText> Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate("Login")}>
                    <TextLinkContent> Login </TextLinkContent>
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
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

export default Signup;
