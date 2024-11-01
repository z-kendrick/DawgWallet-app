import SignUpForm from "@/app/components/SignUpForm";
import styles from "@/app/styles/SignUpForm.module.css";
import CombinedHeader from "@/app/components/CombinedHeader";

export default function SignUp() {
  return (
    <div>
      <CombinedHeader />
      <SignUpForm />
    </div>
  );
}
