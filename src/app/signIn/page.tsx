import CombinedHeader from "@/app/components/CombinedHeader";
import styles from "@/app/styles/SignInForm.module.css";
import Image from "next/image";
import bulldogLogo from "@/app/assets/images/bulldogs-logo.png";
import SignInForm from "@/app/components/signInForm";

export default function SignIn() {
  return (
    <div>
      <CombinedHeader />
      <SignInForm />
    </div>
  );
}
