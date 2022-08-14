import type { NextPage } from "next";
import type { Post, Photo, ExternalLink } from "contentlayer/generated";
import NextLink from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, allExternalLinks, allPhotos } from "contentlayer/generated";
import { Spacer } from "@/components/Spacer";
import { Heading } from "@/components/Heading";
import { PhotoGrid } from "@/components/PhotoGrid";
import * as styles from "./Home.css";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const photos = allPhotos.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  const externalLinks = allExternalLinks.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts, photos, externalLinks } };
}

export const Home: NextPage<{
  posts: Post[];
  photos: Photo[];
  externalLinks: ExternalLink[];
}> = ({ posts, photos, externalLinks }) => {
  console.log(photos);
  return (
    <>
      <NextSeo title="Home" />

      <h1 hidden>Home</h1>

      <Heading fontSize="lg">Posts</Heading>

      <Spacer height="md" />

      <ul>
        {posts.map((post, idx) => {
          return (
            <li key={idx}>
              <h3>
                <NextLink href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </NextLink>
              </h3>
              <time dateTime={post.date}>
                {format(parseISO(post.date), "LLL d, Y")}
              </time>
            </li>
          );
        })}
      </ul>

      <Spacer height="xl" />

      <Heading fontSize="lg">Photos</Heading>

      <Spacer height="md" />

      <PhotoGrid photos={photos.map(({ image }) => image)} />

      <Spacer height="xl" />

      <Heading fontSize="lg">Links</Heading>

      <Spacer height="md" />

      <ul>
        {externalLinks.map((link, idx) => (
          <li key={idx}>
            <h3>
              <a href={link.link}>{link.title}</a>
              {"\u00A0"}
              <span aria-hidden="true">↗</span>
            </h3>
            <time dateTime={link.date}>
              {format(parseISO(link.date), "LLL d, Y")}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
};
