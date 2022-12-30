import Link from "next/link";
import { useRouter } from "next/router";
import { Twitter, Instagram } from "react-feather";
import { motion } from "framer-motion";
import * as styles from "./Banner.css";
import { VisuallyHidden } from "components/VisuallyHidden";

const Banner = () => {
  const router = useRouter();
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.group}>
          <Link
            href="/"
            className={styles.anchor}
            aria-current={router.pathname === "/" ? "page" : undefined}
          >
            {router.pathname === "/" ? (
              <motion.span layoutId="highlight" className={styles.highlight} />
            ) : null}
            Home
          </Link>
          <Link
            href="/posts"
            className={styles.anchor}
            aria-current={router.pathname === "/posts" ? "page" : undefined}
          >
            {router.pathname === "/posts" ? (
              <motion.span layoutId="highlight" className={styles.highlight} />
            ) : null}
            Posts
          </Link>
          {/* <Link href="/everyday-carry">
            <a
              className={styles.anchor}
              aria-current={
                router.pathname === "/everyday-carry" ? "page" : undefined
              }
            >
              {router.pathname === "/everyday-carry" ? (
                <motion.span
                  layoutId="highlight"
                  className={styles.highlight}
                />
              ) : null}
              EDC
            </a>
          </Link> */}
        </div>

        <div className={styles.group}>
          <a
            href="https://www.instagram.com/alexcarp"
            className={styles.anchor}
          >
            <VisuallyHidden>Instagram</VisuallyHidden>
            <Instagram width=".95em" />
          </a>
          <a href="https://twitter.com/hybrid_alex" className={styles.anchor}>
            <VisuallyHidden>Twitter</VisuallyHidden>
            <Twitter width=".95em" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export { Banner };
