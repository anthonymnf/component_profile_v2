import styles from "./style.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkBtn from "../LinkBtn";

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>{props.name}</Title>
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
