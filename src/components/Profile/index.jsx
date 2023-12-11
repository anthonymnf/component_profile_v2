import styles from "./style.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkBtn from "../LinkBtn";
import { useState } from "react";

export default function Profile(props) {
  const [followText, setFolowText] = useState("Follow");
  function handleClick(ev) {
    if (followText == "Follow") {
      alert("Você está seguindo este perfil!!");
      setFolowText("Following");
    } else {
      alert("Você deixou de seguir este perfil!!");
      setFolowText("Follow ");
    }
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followBtn} onClick={handleClick}>
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection className={styles.links}>
        <LinkBtn href={props.githubUrl}>GitHub</LinkBtn>
        <LinkBtn href={props.linkedinUrl}>LinkedIn</LinkBtn>
        <LinkBtn href={props.twitterUrl}>Twitter</LinkBtn>
      </ProfileSection>
    </div>
  );
}
