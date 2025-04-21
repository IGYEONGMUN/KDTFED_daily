import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import usePhoneBookStore from "../stores/usePhonebookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();

  // 스토어공간에 보내는 함수
  const handleAddContact = () => {
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        id="outlined-basic"
        label="이름"
        value={name}
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="전화번호"
        value={phoneNumber}
        variant="outlined"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;
