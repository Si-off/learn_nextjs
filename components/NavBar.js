import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color: wheat;
`;
