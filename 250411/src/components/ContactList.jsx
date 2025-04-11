import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  let [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((it) => it.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <>
      <SearchBox />
      {/* 인덱스값은 이터러블한 객체라면 다 받아올수잇는거임 */}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
