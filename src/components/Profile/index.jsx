import styles from "./style.module.css";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import LinkBtn from "../LinkBtn";

function handleClick(ev) {
  console.log(ev);
  alert("Você está seguindo este perfil!!");
}
export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>{props.name}</span>
        <button className={styles.followBtn} onClick={handleClick}>
          Follow
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
